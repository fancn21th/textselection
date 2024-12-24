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

export type ResolvedCursor = {
  s: number;
  e: number;
  index?: number;
  overLapped?: boolean;
  isGap?: boolean;
  isEven?: boolean;
  isOdd?: boolean;
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

// Types for context value
export type TextRangeSelectionContextType = {
  resolvedCursors: ResolvedCursor[];
  sortedCursorPositions: CursorPosition[];
  text: string;
  content: string[];
  isDragging: boolean;
  visibleLinesPart: LinesPart;
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

// 创建 Provider 组件
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export const TextRangeSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cursors, _setCursors] = useState<OriginCursor[]>([
    { s: 0, e: 100 },
    // { s: 200, e: 500 },
    // { s: 400, e: 600 },
    // { s: 600, e: 700 },
  ]);

  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);
  const [text, _setText] = useState("");
  const [content, setContent] = useState<string[]>(text.split(splitter));
  const [isDragging, setIsDragging] = useState(false);
  const [visibleLines, setVisibleLines] = useState({
    start: 0,
    end: 0,
  });
  const [visibleLinesPart, setVisibleLinesPart] = useState<LinesPart>({});

  const start = useRef(0);
  const end = useRef(0);

  useEffect(() => {
    start.current = performance.now();
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

    // 填充空隙
    const gapFilled = [];
    let lastEnd = 0;
    for (const { s, e, index, overLapped } of deduped) {
      if (s > lastEnd) {
        gapFilled.push({ s: lastEnd, e: s, isGap: true });
      }
      gapFilled.push({ s, e, index, overLapped });
      lastEnd = e;
    }
    if (lastEnd < content.length) {
      gapFilled.push({ s: lastEnd, e: content.length, isGap: true });
    }

    console.log({ gapFilled });

    setResolvedCursors(gapFilled);

    return () => {};
  }, [cursors]);

  useEffect(() => {
    // 结合 visibleLines 和 resolvedCursors 计算出每一行的可视区域

    const start = visibleLines.start * chunkSize;
    const end = (visibleLines.end + 1) * chunkSize;

    // 过滤掉不在可视区域的 cursor
    const slimed = resolvedCursors.filter((cursor) => {
      return cursor.s < end && cursor.e > start;
    });

    const linesPart = slimed.reduce<LinesPart>((acc, cursor, index) => {
      // 每 chunkSize 个字符为一行
      const length = cursor.e - cursor.s;
      const startLineIndex = Math.floor(cursor.s / chunkSize);
      const linesCount = Math.ceil(length / chunkSize);
      // const tail = length % chunkSize;

      const lines = new Array(linesCount).fill(0).reduce((_acc, _, _index) => {
        return {
          ..._acc,
          [startLineIndex + _index]: [
            ...(_acc[startLineIndex + _index] || []),
            {
              s: cursor.s + _index * chunkSize,
              e: cursor.s + (_index + 1) * chunkSize,
              overLapped: cursor.overLapped,
              isGap: !!cursor.isGap,
              isEven: cursor.index! % 2 === 0,
              isOdd: cursor.index! % 2 === 1,
            },
          ],
        };
      }, {});

      return {
        ...acc,
        ...lines,
      };
    }, {});

    console.log({ linesPart });

    setVisibleLinesPart(linesPart);
    return () => {};
  }, [visibleLines, resolvedCursors]);

  // derived state 以下都是派生状态

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
    .sort((a, b) => a.pos - b.pos);

  console.log({ sortedCursorPositions });

  const setText = (text: string) => {
    _setText(text);
    setContent(text.split(splitter));
  };

  const setCursors = (cursors: OriginCursor[]) => {
    _setCursors(cursors);
  };

  const setLineRange = (start: number, end: number) => {
    setVisibleLines({ start, end });
  };

  end.current = performance.now();

  // console.log("end", end.current);

  return (
    <TextRangeSelectionContext.Provider
      value={{
        resolvedCursors,
        text,
        content,
        sortedCursorPositions,
        isDragging,
        setCursors,
        setText,
        setIsDragging,
        setLineRange,
        visibleLinesPart,
      }}
    >
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      {/* debugger */}
      {createPortal(
        <div className="absolute top-0 right-0 bg-gray-100 p-2 text-sm">
          字符长度: <p>{text.length}</p>
          分段: <pre>{JSON.stringify(cursors, null, 2)}</pre>
          背景计算耗时:
          <p>{`Execution time: ${end.current - start.current} ms`}</p>
          正在拖拽:
          <p>{isDragging ? "是" : "否"}</p>
        </div>,
        document.body
      )}
    </TextRangeSelectionContext.Provider>
  );
};
