import { createContext, ReactNode, useEffect, useState } from "react";
import {
  fillGaps,
  splitByChunkSize,
  splitRangesByLine,
  splitTextByIndices,
  toOverLappedTextRanges,
} from "./NewUtils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createPortal } from "react-dom";

// TODO: Moving to config
export const LineCharCount = 50;

// Types for context value
export type NewTRSContextType = {
  byLine: SplittedByLineTextRange[];
  gapFilledByIndex: GapFilledTextRangeByIndex;
  isDragging: boolean;
  draggingObject: DraggingObjectType;
  activatedObject: ActivatedTextRange | null;
  chunks: string[];
  setFullText: (text: string) => void;
  setTextRanges: (ranges: OriginTextRange[]) => void;
  setNewLineRange: (s: number, e: number) => void;
  setIsDragging: () => void;
  setIsDropping: () => void;
  setActivatedRange: (active: SplittedByLineTextRange | null) => void;
  setVisibleRange: (range: { startIndex: number; endIndex: number }) => void;
  setDraggingObject: (obj: DraggingObjectType) => void;
};

export type OriginTextRange = {
  s: number;
  e: number;
};

export type IndexedOriginTextRange = OriginTextRange & {
  index: number; // 文本范围的索引 不包含空隙部分
};

export type OverlappedTextRange = IndexedOriginTextRange & {
  overlapped: number[];
  isOverlapped: boolean;
  hoverIndex: number[]; // 当 cursor 拖动的时候 当前区域 是否需要激活
};

export type GapFilledTextRange = OverlappedTextRange & {
  isGap: boolean;
  gapIndex: number; // 空隙部分的索引
  overallIndex: number; // 文本范围的索引 包含空隙部分
};

export type GapFilledTextRangeByIndex = {
  [index: number]: GapFilledTextRange;
};

export type SplittedByLineTextRange = GapFilledTextRange & {
  lineNumber: number;
  text: string;
};

export type ActivatedTextRange = SplittedByLineTextRange & {
  activatedRange: {
    s: number;
    e: number;
  };
};

export type LineRange = {
  s: number;
  e: number;
} | null;

export type CursorPosition = {
  pos: number; // 坐标
  type: "s" | "e"; // 起点或者是终点
  index: number; // 索引
};

export type DraggingObjectType = {
  hoverPosition: number;
  draggingCursorPos: CursorPosition | null;
  validDropRange: {
    // 有效的放置范围
    s: number;
    e: number;
  };
};

// constants
const BreakRegex = /(\r\n|\r|\n)/g;

// 创建 Context
// TODO: context warning
export const NewTRSContext = createContext<NewTRSContextType>(
  {} as NewTRSContextType
);

// 提供 Context 的 Provider
export const NewTRSProvider = ({ children }: { children: ReactNode }) => {
  const [textRanges, setTextRanges] = useState<OriginTextRange[]>([]); // SOT
  const [chunks, setChunks] = useState<string[]>([]); // SOT

  // 跟踪当前可视区域的 chunk 索引
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });
  // 按换行符切分的文本
  const [internalTextRanges, setInternalTextRanges] = useState<
    IndexedOriginTextRange[]
  >([]);
  const [charCount, setCharCount] = useState(0);
  const [gapFilled, setGapFilled] = useState<GapFilledTextRange[]>([]);
  const [gapFilledByIndex, setGapFilledByIndex] =
    useState<GapFilledTextRangeByIndex>({});
  const [lineRange, _setLineRange] = useState<LineRange>(null);
  const [byLine, setByLine] = useState<SplittedByLineTextRange[]>([]);
  const [isDragging, _setIsDragging] = useState(false);
  const [draggingObject, setDraggingObject] = useState<DraggingObjectType>({
    hoverPosition: -1,
    draggingCursorPos: null,
    validDropRange: {
      s: -1,
      e: -1,
    },
  });
  const [activatedObject, setActivatedObject] =
    useState<ActivatedTextRange | null>(null);

  // wrapper for setFullText
  const setFullText = (text: string) => {
    setCharCount(text.length);
    const matches = [...text.matchAll(BreakRegex)];
    const brokenLines = splitTextByIndices(
      text,
      matches.map((m) => m.index)
    );
    const _chunks = brokenLines.flatMap((brokenLine) =>
      splitByChunkSize(brokenLine, LineCharCount)
    );
    setChunks(_chunks);
  };

  // 计算派生状态
  useEffect(() => {
    // sorted by start position
    const sorted = textRanges
      .slice()
      .sort((a, b) => a.s - b.s)
      .map((range, index) => {
        return {
          ...range,
          index,
        };
      });

    // console.log({ sorted });

    setInternalTextRanges(sorted);
  }, [textRanges]);

  const setNewLineRange = (s: number, e: number) => {
    _setLineRange({
      s,
      e,
    });
  };

  const setIsDragging = () => {
    // TODO: 重渲染导致无法正确设置
    _setIsDragging(true);
  };

  const setIsDropping = () => {
    _setIsDragging(false);
  };

  const setActivatedRange = (active: SplittedByLineTextRange | null) => {
    if (active)
      setActivatedObject({
        ...activatedObject,
        ...active,
        activatedRange: {
          s: internalTextRanges[active.index].s,
          e: internalTextRanges[active.index].e,
        },
      });
    else setActivatedObject(null);
  };

  // 整个文本的切分计算
  useEffect(() => {
    if (internalTextRanges.length === 0 || charCount === 0) return;
    // 第一步：将区间按重叠切割
    const overLapped = toOverLappedTextRanges(Array.from(internalTextRanges));
    // console.log({ overLapped });

    // 第二步：填充
    const _gapFilled = fillGaps(overLapped, charCount);
    // console.log({ _gapFilled });
    setGapFilled(_gapFilled);

    // 第三步：按索引创建对象
    const _gapFilledByIndex = _gapFilled.reduce((acc, cur) => {
      acc[cur.overallIndex] = cur;
      return acc;
    }, {} as GapFilledTextRangeByIndex);
    // console.log({ _gapFilledByIndex });

    setGapFilledByIndex(_gapFilledByIndex);
  }, [internalTextRanges, charCount]);

  // 窗口的切分计算
  useEffect(() => {
    if (!lineRange || gapFilled.length === 0) return;

    // console.log({ lineRange, gapFilled });

    // 窗口过滤
    const _byLine = splitRangesByLine(
      gapFilled,
      chunks,
      Math.floor(lineRange.s),
      Math.floor(lineRange.e)
    );

    // console.log({ _byLine });

    setByLine(_byLine);
  }, [gapFilled, lineRange]);

  return (
    <NewTRSContext.Provider
      value={{
        chunks, // 换行符分块文本
        byLine, // 按行切分的文本
        gapFilledByIndex, // 按总索引的文本范围
        isDragging, // 是否正在拖动
        draggingObject, // 拖动对象
        activatedObject, // 激活对象
        setFullText, // 设置全文文本
        setTextRanges, // 设置文本区间 SOT
        setNewLineRange, // 设置新的行区间
        setIsDragging, // 设置正在拖动
        setIsDropping, // 设置正在放置
        setActivatedRange, // 设置激活区间
        setVisibleRange, // 设置可视区间
        setDraggingObject, // 设置拖动对象
      }}
    >
      <DndProvider debugMode={true} backend={HTML5Backend}>
        {children}
      </DndProvider>
      {/* debugger */}
      {createPortal(
        <div className="flex absolute bottom-0 right-0 bg-gray-100 p-2 text-sm gap-1 h-[200px] overflow-y-scroll">
          <div>
            <h5>字符长度:</h5>
            {charCount}
          </div>
          <div>
            <h5>激活范围:</h5>
            <pre>{JSON.stringify(activatedObject, null, 2)}</pre>
          </div>
          <div>
            <h5>Range分段:</h5>
            <pre>{JSON.stringify(textRanges, null, 2)}</pre>
          </div>
          <div>
            <h5>正在拖动:</h5>
            {isDragging ? "是" : "否"}
          </div>
          <div>
            <h5>拖动对象:</h5>
            <pre>{JSON.stringify(draggingObject, null, 2)}</pre>
          </div>
          <div>
            <h5>可见行范围:</h5>
            Start: {visibleRange.startIndex} / End: {visibleRange.endIndex}
          </div>
        </div>,
        document.body
      )}
    </NewTRSContext.Provider>
  );
};
