import { createContext, ReactNode, useEffect, useState } from "react";
import {
  fillGaps,
  splitRangesByLine,
  toOverLappedTextRanges,
} from "./NewUtils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const LineCharCount = 50;

// Types for context value
export type NewTRSContextType = {
  fullText: string;
  charCount: number;
  setCharCount: (count: number) => void;
  setFullText: (text: string) => void;
  setTextRanges: (ranges: OriginTextRange[]) => void;
  setNewLineRange: (s: number, e: number) => void;
};

export type OriginTextRange = {
  s: number;
  e: number;
};

export type IndexedOriginTextRange = OriginTextRange & {
  index: number;
};

export type OverlappedTextRange = IndexedOriginTextRange & {
  overlapped: number[] | null;
};

export type GapFilledTextRange = OverlappedTextRange & {
  isGap: boolean;
};

export type SplittedByLineTextRange = GapFilledTextRange & {
  lineNumber: number;
};

export type LineRange = {
  s: number;
  e: number;
} | null;

// 创建 Context
// TODO: context warning
export const NewTRSContext = createContext<NewTRSContextType>(
  {} as NewTRSContextType
);

// 提供 Context 的 Provider
export const NewTRSProvider = ({ children }: { children: ReactNode }) => {
  const [charCount, setCharCount] = useState(0);
  const [fullText, _setFullText] = useState("");
  const [textRanges, _setTextRanges] = useState<IndexedOriginTextRange[]>([]);
  const [gapFilled, setGapFilled] = useState<GapFilledTextRange[]>([]);
  const [lineRange, _setLineRange] = useState<LineRange>(null);

  // wrapper for setFullText
  const setFullText = (text: string) => {
    _setFullText(text);
    setCharCount(text.length);
  };

  const setTextRanges = (ranges: OriginTextRange[]) => {
    // sorted by start
    const sorted = ranges.slice().sort((a, b) => a.s - b.s);

    _setTextRanges(
      sorted.map((range, index) => {
        return {
          ...range,
          index,
        };
      })
    );
  };

  const setNewLineRange = (s: number, e: number) => {
    _setLineRange({
      s,
      e,
    });
  };

  // 整个文本的切分计算
  useEffect(() => {
    // 第一步：将区间按重叠切割
    const overLapped = toOverLappedTextRanges(textRanges);
    // 第二步：填充
    const _gapFilled = fillGaps(overLapped, charCount);
    setGapFilled(_gapFilled);
  }, [textRanges, charCount]);

  // 窗口的切分计算
  useEffect(() => {
    if (!lineRange || gapFilled.length === 0) return;

    console.log({ lineRange, gapFilled });

    // 窗口过滤

    const byLine = splitRangesByLine(
      gapFilled,
      LineCharCount,
      lineRange.s,
      lineRange.e
    );

    console.log({ byLine });
  }, [gapFilled, lineRange]);

  return (
    <NewTRSContext.Provider
      value={{
        charCount,
        setCharCount,
        setFullText,
        setTextRanges,
        setNewLineRange,
        fullText,
      }}
    >
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </NewTRSContext.Provider>
  );
};
