import clsx from "clsx";
import { memo, useCallback, useContext, useEffect } from "react";
import { useDrag } from "react-dnd";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import Char from "./Char";
import ListPoi from "./ListPoi";
import type { OriginCursor, TextRangeSelectionContextType, CursorPosition } from "../context/TextRangeSelectionContext";
const predefinedColors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500"];

export const CursorGhost = memo(({ pos }: { index: number; pos: CursorPosition }) => {
  const { setIsDragging } = useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CURSOR",
    item: () => {
      return pos;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging]);

  return (
    <span
      className={clsx(
        // "text-transparent",
        "font-extrabold",
        "absolute z-50 cursor-move",
        predefinedColors[pos.origin % predefinedColors.length],
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
});

function DragNDrop() {
  const { text, setCursors, isDragging } = useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);

  const onDrop = useCallback(
    (pos: CursorPosition, newPos: number) => {
      setCursors((prevCursors) => {
        return prevCursors.map((cursor: OriginCursor, index: number) => {
          if (pos.origin === index) {
            if (pos.type === "s") {
              return { ...cursor, s: newPos };
            }
            if (pos.type === "e") {
              return { ...cursor, e: newPos };
            }
          }
          return cursor;
        });
      });
    },
    [setCursors]
  );

  return (
    <div className={clsx("absolute", "z-30 dndLayer", !isDragging && "pointer-events-none")}>
      {/* {text.split("").map((char, index) => (
        <Char key={index} index={index} onDrop={onDrop}>
          {char}
        </Char>
      ))} */}
      <ListPoi text={text} pageSize={5000} onDrop={onDrop} containerSelector="#outer-scroll-container" />
    </div>
  );
}

export default memo(DragNDrop);
