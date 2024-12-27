import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import {
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";

import { CursorGhost } from "./Cursor";

const BackgroundLayer = ({
  parts,
  index,
  text,
}: {
  parts: SplittedByLineTextRange[];
  index: number;
  text: string;
}) => {
  return (
    <>
      {parts.map((part, _index) => {
        // TODO: explain index
        const _start = part.s - index * chunkSize;
        const _end = part.e - index * chunkSize;
        const overlapped = !!part.overlapped;
        const isOdd = part.index % 2 === 1;
        const isEven = part.index % 2 === 0;
        const isGap = part.isGap;
        return (
          <Fragment key={_index}>
            {isEven && !overlapped && (
              <CursorGhost pos={{ index: part.index }} />
            )}
            <span
              className={clsx(
                // "text-transparent",
                overlapped && "bg-gray-300",
                !overlapped && isEven && "bg-red-300",
                !overlapped && isOdd && "bg-green-300",
                isGap && "bg-transparent"
              )}
            >
              {text.slice(_start, _end)}
            </span>
            {isEven && overlapped && (
              <CursorGhost pos={{ index: part.index }} />
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default BackgroundLayer;
