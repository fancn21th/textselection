import clsx from "clsx";
import {
  chunkSize,
  CursorPosition,
  ResolvedCursor,
} from "../context/TextRangeSelectionContext";
import { Fragment } from "react/jsx-runtime";
import { CursorGhost } from "./Cursor";

const BackgroundLayer = ({
  parts,
  index,
  text,
  cursors,
}: {
  parts: ResolvedCursor[];
  index: number;
  text: string;
  cursors: CursorPosition[] | undefined | null;
}) => {
  const hasCursor = cursors && cursors.length > 0;
  const cursorByPos = hasCursor
    ? cursors.reduce((acc, cursor) => {
        return {
          ...acc,
          [cursor.pos]: cursor,
        };
      }, {})
    : {};

  console.log({ cursorByPos });

  return (
    <>
      {parts.map((part, _index) => {
        // TODO: explain index
        const _start = part.s - index * chunkSize;
        const _end = part.e - index * chunkSize;
        console.log({ _start, _end });
        const cursor = cursorByPos[part.s];
        return (
          <Fragment key={_index}>
            <span
              className={clsx(
                // "text-transparent",
                part.overLapped && "bg-gray-300",
                !part.overLapped && part.isEven && !part.isFill && "bg-red-300",
                !part.overLapped &&
                  part.isOdd &&
                  !part.isFill &&
                  "bg-green-300",
                part.isFill && "bg-transparent"
              )}
            >
              {text.slice(_start, _end)}
            </span>
            {cursor && <CursorGhost pos={cursor} />}
          </Fragment>
        );
      })}
    </>
  );
};

export default BackgroundLayer;
