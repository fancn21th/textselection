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

// utils
function splitRangesByLine(ranges: ResolvedCursor[], lineLength: number) {
  const result = [];

  for (const range of ranges) {
    const { s: start, e: end } = range;

    // 起始行和结束行
    let currentLine = Math.floor(start / lineLength) + 1;
    let currentStart = start;

    // 遍历范围，按行切分
    while (currentStart < end) {
      const lineStart = (currentLine - 1) * lineLength;
      const lineEnd = currentLine * lineLength;

      // 切分当前行的范围
      result.push({
        ...range,
        line: currentLine,
        s: Math.max(currentStart, lineStart),
        e: Math.min(end, lineEnd),
      });

      // 移动到下一行
      currentLine++;
      currentStart = Math.min(end, lineEnd);
    }
  }

  return result;
}

function fillGaps(inputRanges: ResolvedCursor[], lineLength: number) {
  const result = [];
  const rangesByLine: { [key: number]: ResolvedCursor[] } = {};

  // 按行组织数据
  for (const range of inputRanges) {
    const { line } = range;
    if (!rangesByLine[line!]) {
      rangesByLine[line!] = [];
    }
    rangesByLine[line!].push({ ...range });
  }

  // 遍历每一行，补全空隙
  for (const [line, ranges] of Object.entries(rangesByLine)) {
    const lineStart = (line - 1) * lineLength;
    const lineEnd = line * lineLength;

    // 按起始位置排序
    ranges.sort((a: { s: number }, b: { s: number }) => a.s - b.s);

    let currentStart = lineStart;

    for (const range of ranges) {
      const { s, e } = range;

      // 补全空隙
      if (currentStart < s) {
        result.push({
          line: Number(line),
          s: currentStart,
          e: s,
          isFill: true,
        });
      }

      // 添加当前区间
      result.push({
        ...range,
        line: Number(line),
        s,
        e,
      });

      currentStart = e; // 更新当前起点
    }

    // 补全最后的空隙
    if (currentStart < lineEnd) {
      result.push({
        line: Number(line),
        s: currentStart,
        e: lineEnd,
        isFill: true,
      });
    }
  }

  return result;
}

// 创建 Provider 组件
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export const TextRangeSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cursors, _setCursors] = useState<OriginCursor[]>([
    { s: 2, e: 25 },
    { s: 15, e: 28 },
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

    setResolvedCursors(oddEven);

    return () => {};
  }, [cursors]);

  useEffect(() => {
    // 结合 visibleLines 和 resolvedCursors 计算出每一行的可视区域

    const start = visibleLines.start * chunkSize;
    const end = (visibleLines.end + 1) * chunkSize;

    console.log({ resolvedCursors });

    // 过滤掉不在可视区域的 cursor
    const slimed = resolvedCursors.filter((cursor) => {
      return cursor.s < end && cursor.e > start;
    });
    // .filter((cursor) => {
    //   // TODO: removed
    //   return cursor.isGap !== true;
    // });

    console.log({ slimed });

    const splitted = splitRangesByLine(slimed, chunkSize);

    console.log({ splitted });

    const gapFilled = fillGaps(splitted, chunkSize);

    console.log({ gapFilled });

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

  // console.log({ sortedCursorPositions });

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
