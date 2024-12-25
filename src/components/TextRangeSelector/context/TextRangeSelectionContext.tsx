import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createContext, useEffect, useRef, useState } from "react";

// Constants
const splitter = "";
export const chunkSize = 50;

// Types
export type OriginCursor = { s: number; e: number };

export type MarkedCursor = {
  s: number;
  e: number;
  index: number;
  tailOverlapped: number;
  headOverlapped: number;
};

export type ResolvedLine = {
  s: number;
  e: number;
  line: number;
};

export type ResolvedCursor = {
  s: number;
  e: number;
  index?: number;
  overLapped?: boolean;
  isGap?: boolean;
  isEven?: boolean;
  isOdd?: boolean;
  isFill?: boolean;
  line?: number;
};

export type CursorPosition = {
  pos: number; // 坐标
  type: string; // 起点或者是终点
  origin: number; // 原始索引
};

export type CharType = {
  isCursor: boolean;
  char: string;
  pos: CursorPosition | null;
  index: number; // 坐标
};

export type LinesPart = {
  [key: number]: [ResolvedCursor];
};

export type CursorByLine = {
  [key: number]: CursorPosition[];
};

// Types for context value
export type TextRangeSelectionContextType = {
  resolvedCursors: ResolvedCursor[];
  text: string;
  content: string[];
  isDragging: boolean;
  visibleLinesPart: LinesPart;
  sortedCursorPositions: CursorByLine;
  setText: (text: string) => void;
  setIsDragging: (isDragging: boolean) => void;
  setLineRange: (start: number, end: number) => void;
  setCursors: (cursors: OriginCursor[]) => void;
};

// 创建 Context
export const TextRangeSelectionContext =
  createContext<TextRangeSelectionContextType>(
    {} as TextRangeSelectionContextType
  );

// utils

// 创建 Provider 组件
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { fillGaps, splitRangesByLine } from "./utis";

export const TextRangeSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cursors, _setCursors] = useState<OriginCursor[]>([
    { s: 2, e: 25 },
    { s: 15, e: 28 },
    { s: 50, e: 120 },
    { s: 2000, e: 2700 },
    { s: 2550, e: 3000 },
  ]);

  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);
  const [text, _setText] = useState("");
  const [content, _setContent] = useState<string[]>(text.split(splitter));
  const [isDragging, setIsDragging] = useState(false);
  const [visibleLines, _setVisibleLines] = useState({
    start: 0,
    end: 0,
  });
  const [visibleLinesPart, setVisibleLinesPart] = useState<LinesPart>({});

  const perfStart = useRef(0);
  const perfEnd = useRef(0);
  // TODO: check
  const startRef = useRef(0);
  const endRef = useRef(0);

  useEffect(() => {
    perfStart.current = performance.now();
    // console.log("start", start.current);

    // 排序
    const sorted = cursors.slice().sort((a, b) => a.s - b.s);
    // console.log({ sorted });

    const indexed = sorted.map(
      (cursor, index): MarkedCursor => ({
        ...cursor,
        index,
        tailOverlapped: -1,
        headOverlapped: -1,
      })
    );

    // 标记重叠
    let last = indexed[0];
    for (let i = 1; i < indexed.length; i++) {
      const current = indexed[i];
      // 如果 current.s < last.e 说明有重叠
      if (current.s < last.e) {
        last.tailOverlapped = current.s;
        current.headOverlapped = last.e;
      }
      last = current;
    }

    // console.log({ indexed });

    // 重叠处理
    const overlapped = indexed.reduce<ResolvedCursor[]>((acc, current) => {
      if (current.headOverlapped !== -1 && current.tailOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.headOverlapped,
            index: current.index,
            overLapped: true,
          },
          {
            s: current.headOverlapped,
            e: current.tailOverlapped,
            index: current.index,
            overLapped: false,
          },
          {
            s: current.tailOverlapped,
            e: current.e,
            index: current.index,
            overLapped: true,
          },
        ];
      }
      if (current.headOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.headOverlapped,
            index: current.index,
            overLapped: true,
          },
          {
            s: current.headOverlapped,
            e: current.e,
            index: current.index,
            overLapped: false,
          },
        ];
      }
      if (current.tailOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.tailOverlapped,
            index: current.index,
            overLapped: false,
          },
          {
            s: current.tailOverlapped,
            e: current.e,
            index: current.index,
            overLapped: true,
          },
        ];
      }
      return [...acc, { ...current, index: current.index, overLapped: false }];
    }, []);

    // console.log({ overlapped });

    // 去掉重复的 重叠
    const deduped = [];
    const pos = new Set();
    for (const cursor of overlapped) {
      const key = `${cursor.s}-${cursor.e}`;
      if (!pos.has(key)) {
        pos.add(key);
        deduped.push(cursor);
      }
    }

    // console.log({ deduped });

    let fixedIndex = 0;
    const oddEven = deduped.map((cursor, index) => {
      if (cursor.overLapped) {
        fixedIndex++;
      }
      const isEven = (index - fixedIndex) % 2 === 0;
      return {
        ...cursor,
        isEven,
        isOdd: !isEven,
      };
    });

    // 填充空隙
    // TODO: 可以去掉
    // const gapFilled = [];
    // let lastEnd = 0;
    // for (const { s, e, index, overLapped, isEven, isOdd } of oddEven) {
    //   if (s > lastEnd) {
    //     gapFilled.push({ s: lastEnd, e: s, isGap: true });
    //   }
    //   gapFilled.push({ s, e, index, overLapped, isEven, isOdd });
    //   lastEnd = e;
    // }
    // if (lastEnd < content.length) {
    //   gapFilled.push({ s: lastEnd, e: content.length, isGap: true });
    // }

    // console.log({ gapFilled });

    console.log({ oddEven });

    setResolvedCursors(oddEven);

    perfEnd.current = performance.now();

    // console.log("end", end.current);

    return () => {};
  }, [cursors]);

  useEffect(() => {
    // 结合 visibleLines 和 resolvedCursors 计算出每一行的可视区域

    const start = visibleLines.start * chunkSize;
    const end = (visibleLines.end + 1) * chunkSize;

    startRef.current = start;
    endRef.current = end;

    // console.log({ resolvedCursors });

    // 过滤掉不在可视区域的 cursor
    const slimed = resolvedCursors.filter((cursor) => {
      return cursor.s < end && cursor.e > start;
    });

    // console.log({ slimed });

    const splitted = splitRangesByLine(slimed, chunkSize);

    // console.log({ splitted });

    const gapFilled = fillGaps(splitted, chunkSize);

    // console.log({ gapFilled });

    const linesPart = gapFilled.reduce<LinesPart>((acc, line) => {
      const { line: lineNumber } = line;
      if (!acc[lineNumber - 1]) {
        acc[lineNumber - 1] = [];
      }
      acc[lineNumber - 1].push({
        ...line,
      });
      return acc;
    }, {});

    setVisibleLinesPart(linesPart);

    return () => {};
  }, [visibleLines, resolvedCursors]);

  const setText = (text: string) => {
    _setText(text);
    _setContent(text.split(splitter));
  };

  const setCursors = (cursors: OriginCursor[]) => {
    _setCursors(cursors);
  };

  const setLineRange = (start: number, end: number) => {
    _setVisibleLines({ start, end });
  };

  // 派生状态

  // console.log({ cursors });

  // Cursor 坐标
  const cursorPositions = cursors.reduce<CursorPosition[]>(
    (acc, cursor, index) => {
      return [
        ...acc,
        { pos: cursor.s, type: "s", origin: index },
        { pos: cursor.e, type: "e", origin: index },
      ];
    },
    []
  );

  // console.log({ cursorPositions });

  const sortedCursorPositions = cursorPositions
    .slice()
    .sort((a, b) => a.pos - b.pos)
    .filter((cursor) => {
      return startRef.current <= cursor.pos && cursor.pos <= endRef.current;
    })
    .map((cursor) => {
      return {
        ...cursor,
        lineNumber: Math.floor(cursor.pos / chunkSize),
      };
    })
    .reduce<CursorByLine>((acc, cursor) => {
      const { lineNumber } = cursor;
      if (!acc[lineNumber]) {
        acc[lineNumber] = [];
      }
      acc[lineNumber].push({
        ...cursor,
      });
      return acc;
    }, {});

  console.log({ sortedCursorPositions });

  return (
    <TextRangeSelectionContext.Provider
      value={{
        resolvedCursors,
        text,
        content,
        isDragging,
        setCursors,
        setText,
        setIsDragging,
        setLineRange,
        visibleLinesPart,
        sortedCursorPositions,
      }}
    >
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      {/* debugger */}
      {createPortal(
        <div className="absolute top-0 right-0 bg-gray-100 p-2 text-sm">
          字符长度: <p>{text.length}</p>
          分段: <pre>{JSON.stringify(cursors, null, 2)}</pre>
          背景计算耗时:
          <p>{`Execution time: ${perfEnd.current - perfStart.current} ms`}</p>
          正在拖拽:
          <p>{isDragging ? "是" : "否"}</p>
        </div>,
        document.body
      )}
    </TextRangeSelectionContext.Provider>
  );
};
