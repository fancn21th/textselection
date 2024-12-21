import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";
import { CursorGhost } from "../DragnDropRender";
import type { CursorPosition } from "../DragnDropRender";
import { createPortal } from "react-dom";

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
export type Part = {
  text: string; // 段落内容
  index: number; // 段落索引
  overLapped: boolean; // 是否重叠部分
  isGap: boolean; // 是否空隙
  isEven: boolean; // 是否索引偶数
  isOdd: boolean; // 是否索引奇数
};
type Combo = Part | CursorPosition;

const splitter = "";

function Background({ text }: { text: string }) {
  const [cursors] = useState<OriginCursor[]>([
    { s: 100, e: 300 },
    { s: 200, e: 500 },
    // { s: 400, e: 600 },
    // { s: 600, e: 700 },
  ]);
  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);
  const start = useRef(0);
  const end = useRef(0);
  const content = text.split(splitter);

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

  let pos = 0;
  const parts = resolvedCursors.reduce<Combo[]>((acc, cursor) => {
    const text = content.slice(cursor.s, cursor.e).join("");
    const append: Combo[] = [
      {
        text,
        index: cursor.index!,
        overLapped: cursor.overLapped!,
        isGap: cursor.isGap!,
        isEven: cursor.index! % 2 === 0,
        isOdd: cursor.index! % 2 === 1,
      },
    ];
    if (pos < sortedPositions.length) {
      if (
        sortedPositions[pos].type === "s" &&
        cursor.s === sortedPositions[pos].pos
      ) {
        append.unshift({
          ...sortedPositions[pos],
        });
        pos++;
      }
      if (
        sortedPositions[pos].type === "e" &&
        cursor.e === sortedPositions[pos].pos
      ) {
        append.push({
          ...sortedPositions[pos],
        });
        pos++;
      }
    }
    return [...acc, ...append];
  }, []);

  end.current = performance.now();

  return (
    <>
      {parts.map((part, index) => {
        if ("text" in part) {
          return (
            <Fragment key={index}>
              <span
                className={clsx(
                  "text-transparent",
                  !part.overLapped && part.isEven && "bg-red-300",
                  !part.overLapped && part.isOdd && "bg-green-300",
                  part.overLapped && "bg-gray-300"
                )}
              >
                {part.text}
              </span>
            </Fragment>
          );
        }
        return <CursorGhost key={index} index={part.origin}></CursorGhost>;
      })}

      {createPortal(
        <div className="fixed bottom-0 right-0 p-4 bg-white shadow-lg">
          分段: <pre>{JSON.stringify(cursors, null, 2)}</pre>
          计算耗费时间: {`Execution time: ${end.current - start.current} ms`}
        </div>,
        document.body
      )}
    </>
  );
}

export default Background;
