import clsx from "clsx";
import { Fragment, memo, useContext, useMemo } from "react";
import { CursorGhost } from "../DragnDropRender";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type { TextRangeSelectionContextType, CursorPosition } from "../context/TextRangeSelectionContext";

type Part = {
  text: string; // 段落内容
  index: number; // 段落索引
  overLapped: boolean; // 是否重叠部分
  isGap: boolean; // 是否空隙
  isEven: boolean; // 是否索引偶数
  isOdd: boolean; // 是否索引奇数
};

type Combo = Part | CursorPosition;

function Background() {
  const { resolvedCursors, content, sortedPositions } = useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);
  // 原代码
  // const parts = useMemo(() => {
  //   let pos = 0;
  //   return resolvedCursors.reduce<Combo[]>((acc, cursor) => {
  //     const text = content.slice(cursor.s, cursor.e).join("");
  //     const append: Combo[] = [
  //       {
  //         text,
  //         index: cursor.index!,
  //         overLapped: cursor.overLapped!,
  //         isGap: cursor.isGap!,
  //         isEven: cursor.index! % 2 === 0,
  //         isOdd: cursor.index! % 2 === 1,
  //       },
  //     ];
  //     if (pos < sortedPositions.length) {
  //       if (sortedPositions[pos].type === "s" && cursor.s === sortedPositions[pos].pos) {
  //         append.unshift({
  //           ...sortedPositions[pos],
  //         });
  //         pos++;
  //       }
  //       if (sortedPositions[pos].type === "e" && cursor.e === sortedPositions[pos].pos) {
  //         append.push({
  //           ...sortedPositions[pos],
  //         });
  //         pos++;
  //       }
  //     }
  //     return [...acc, ...append];
  //   }, []);
  // }, [resolvedCursors, content, sortedPositions]);
  // 新代码
  const joinedContent = useMemo(() => content.join(""), [content]);
  const parts = useMemo(() => {
    let pos = 0;
    // 预估数组大小
    const result = new Array(resolvedCursors.length * 3); // 每个游标最多产生3个元素
    let resultIndex = 0;

    resolvedCursors.forEach((cursor) => {
      const text = joinedContent.substring(cursor.s, cursor.e);

      if (pos < sortedPositions.length) {
        if (sortedPositions[pos].type === "s" && cursor.s === sortedPositions[pos].pos) {
          result[resultIndex++] = { ...sortedPositions[pos] };
          pos++;
        }
      }

      result[resultIndex++] = {
        text,
        index: cursor.index!,
        overLapped: cursor.overLapped!,
        isGap: cursor.isGap!,
        isEven: cursor.index! % 2 === 0,
        isOdd: cursor.index! % 2 === 1,
      };

      if (pos < sortedPositions.length) {
        if (sortedPositions[pos].type === "e" && cursor.e === sortedPositions[pos].pos) {
          result[resultIndex++] = { ...sortedPositions[pos] };
          pos++;
        }
      }
    });

    return result.slice(0, resultIndex); // 只返回使用的部分
  }, [resolvedCursors, joinedContent, sortedPositions]);

  return (
    <div className={clsx("absolute", "z-10 bglayer max-h-full")}>
      {parts.map((part, index) => {
        if (index === parts.length - 1 && "text" in part) return null;
        if ("text" in part) {
          return (
            <span key={index} className={clsx("text-transparent", !part.overLapped && part.isEven && "bg-red-300", !part.overLapped && part.isOdd && "bg-green-300", part.overLapped && "bg-gray-300")}>
              {part.text}
            </span>
          );
        }
        return <CursorGhost key={index} index={index} pos={part}></CursorGhost>;
      })}
    </div>
  );
}

export default memo(Background);
