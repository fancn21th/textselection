import clsx from "clsx";
import { Fragment, useContext } from "react";
import { CursorGhost } from "../DragnDropRender";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type {
  TextRangeSelectionContextType,
  CursorPosition,
} from "../context/TextRangeSelectionContext";

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
  const { resolvedCursors, content, sortedPositions } =
    useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);

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

  return (
    <div className="absolute z-10">
      {/* bg layer */}
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
    </div>
  );
}

export default Background;
