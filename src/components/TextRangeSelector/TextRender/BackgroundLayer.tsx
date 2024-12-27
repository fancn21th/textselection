import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import {
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";

// import { CursorGhost } from "./Cursor";

const BackgroundLayer = ({
  parts,
  index,
  text,
}: // cursors,
{
  parts: SplittedByLineTextRange[];
  index: number;
  text: string;
  // cursors: CursorPosition[] | undefined | null;
}) => {
  // const hasCursor = cursors && cursors.length > 0;
  // const cursorByPos = hasCursor
  //   ? cursors.reduce((acc, cursor) => {
  //       return {
  //         ...acc,
  //         [cursor.pos]: cursor,
  //       };
  //     }, {})
  //   : {};
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
        // const cursor = cursorByPos[part.s];
        return (
          <Fragment key={_index}>
            {/* {cursor && <CursorGhost pos={cursor} />} */}
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
          </Fragment>
        );
      })}
    </>
  );
};

export default BackgroundLayer;
