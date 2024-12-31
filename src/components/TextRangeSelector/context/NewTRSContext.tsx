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
  isDragging: boolean;
  cursorPositions: CursorPosition[];
  activatedObject: ActivatedObject;
  chunks: string[];
  setFullText: (text: string) => void;
  setTextRanges: (ranges: OriginTextRange[]) => void;
  setNewLineRange: (s: number, e: number) => void;
  setIsDragging: () => void;
  setIsDropping: () => void;
  setActivatedRange: (
    activatedRangeIndex: number,
    isGap: boolean,
    overlapped: boolean
  ) => void;
  setVisibleRange: (range: { startIndex: number; endIndex: number }) => void;
};

export type OriginTextRange = {
  s: number;
  e: number;
};

export type IndexedOriginTextRange = OriginTextRange & {
  index: number;
};

export type OverlappedTextRange = IndexedOriginTextRange & {
  overlapped: number[];
  isOverlapped: boolean;
  hoverIndex: number[];
};

export type GapFilledTextRange = OverlappedTextRange & {
  isGap: boolean;
};

export type SplittedByLineTextRange = GapFilledTextRange & {
  lineNumber: number;
  text: string;
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

export type ActivatedObject = {
  status: "idle" | "activated";
  activatedRangeIndex: number;
  isGap: boolean;
  overlapped: boolean;
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
  const [cursorPositions, setCursorPositions] = useState<CursorPosition[]>([]);
  const [gapFilled, setGapFilled] = useState<GapFilledTextRange[]>([]);
  const [lineRange, _setLineRange] = useState<LineRange>(null);
  const [byLine, setByLine] = useState<SplittedByLineTextRange[]>([]);
  const [isDragging, _setIsDragging] = useState(false);
  const [activatedObject, setActivatedObject] = useState<ActivatedObject>({
    isGap: false,
    activatedRangeIndex: -1,
    overlapped: false,
    status: "idle",
  });

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
    const sorted = textRanges.slice().sort((a, b) => a.s - b.s);

    setCursorPositions(
      sorted.slice().flatMap<CursorPosition>((range, index) => {
        return [
          {
            pos: range.s,
            type: "s",
            index,
          },
          {
            pos: range.e,
            type: "e",
            index,
          },
        ];
      })
    );

    setInternalTextRanges(
      sorted.map((range, index) => {
        return {
          ...range,
          index,
        };
      })
    );
  }, [textRanges]);

  const setNewLineRange = (s: number, e: number) => {
    _setLineRange({
      s,
      e,
    });
  };

  const setIsDragging = () => {
    _setIsDragging(true);
  };

  const setIsDropping = () => {
    _setIsDragging(false);
  };

  const setActivatedRange = (
    activatedRangeIndex: number,
    isGap: boolean,
    overlapped: boolean
  ) => {
    setActivatedObject({
      ...activatedObject,
      activatedRangeIndex,
      isGap,
      overlapped,
      status: "activated",
    });
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

    console.log({ _byLine });

    setByLine(_byLine);
  }, [gapFilled, lineRange]);

  return (
    <NewTRSContext.Provider
      value={{
        chunks, // 换行符分块文本
        byLine, // 按行切分的文本
        cursorPositions, // 光标位置
        isDragging, // 是否正在拖动
        activatedObject, // 激活对象
        setFullText, // 设置全文文本
        setTextRanges, // 设置文本区间 SOT
        setNewLineRange, // 设置新的行区间
        setIsDragging, // 设置正在拖动
        setIsDropping, // 设置正在放置
        setActivatedRange, // 设置激活区间
        setVisibleRange, // 设置可视区间
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

          {/* Cursors: <pre>{JSON.stringify(cursorPositions, null, 2)}</pre> */}
          <div>
            <h5>正在拖动:</h5>
            {isDragging ? "是" : "否"}
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
