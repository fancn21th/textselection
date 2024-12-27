import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import {
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";

import { CursorGhost } from "./Cursor";

const BackgroundLayer = ({
  parts,
  lineIndex,
  text,
}: {
  parts: SplittedByLineTextRange[];
  lineIndex: number;
  text: string;
}) => {
  return (
    <>
      {parts.map((part, _index) => {
        const _start = part.s - lineIndex * chunkSize;
        const _end = part.e - lineIndex * chunkSize;
        const _partText = text.slice(_start, _end);
        const overlapped = part.isOverlapped; // 重叠部分
        const isOdd = part.index % 2 === 1; // 奇数区域
        const isEven = part.index % 2 === 0; // 偶数区域
        const isGap = part.isGap; // 空隙部分

        return (
          <Fragment key={_index}>
            <span
              className={clsx(
                // "text-transparent",
                overlapped && "bg-gray-300",
                !overlapped && isEven && "bg-red-300",
                !overlapped && isOdd && "bg-green-300",
                isGap && "bg-transparent"
              )}
            >
              {_partText}
            </span>
          </Fragment>
        );
      })}
    </>
  );
};

export default BackgroundLayer;
