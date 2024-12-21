import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createContext, useEffect, useRef, useState } from "react";
import { CursorPosition } from "../components/DragnDropRender";

// Constants
const splitter = "";

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
};

// Types for context value
export type TextRangeSelectionContextType = {
  cursors: OriginCursor[];
  setCursors: (cursors: OriginCursor[]) => void;
  resolvedCursors: ResolvedCursor[];
  setText: (text: string) => void;
  text: string;
  content: string[];
  sortedPositions: CursorPosition[];
  executionTime: number;
} | null;

// 创建 Context
export const TextRangeSelectionContext =
  createContext<TextRangeSelectionContextType>(null);

// 创建 Provider 组件
export const TextRangeSelectionProvider = ({ children }) => {
  const [cursors, setCursors] = useState<OriginCursor[]>([
    { s: 100, e: 300 },
    { s: 200, e: 500 },
    // { s: 400, e: 600 },
    // { s: 600, e: 700 },
  ]);

  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);

  const [text, _setText] = useState("");

  const start = useRef(0);
  const end = useRef(0);

  useEffect(() => {
    start.current = performance.now();

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

    // console.log({ gapFilled });

    setResolvedCursors(gapFilled);
  }, [cursors]);

  // derived state 以下都是派生状态

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

  const sortedPositions = cursorPositions.slice().sort((a, b) => a.pos - b.pos);

  // console.log({ sortedPositions });

  end.current = performance.now();

  const setText = (text: string) => {
    _setText(text);
  };

  const content = text.split(splitter);

  return (
    <TextRangeSelectionContext.Provider
      value={{
        cursors,
        resolvedCursors,
        setText,
        text,
        content,
        sortedPositions,
        executionTime: end.current - start.current,
        setCursors,
      }}
    >
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </TextRangeSelectionContext.Provider>
  );
};
