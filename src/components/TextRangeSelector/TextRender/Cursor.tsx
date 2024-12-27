import { useContext, useEffect } from "react";
import {
  CursorPosition,
  TextRangeSelectionContext,
  TextRangeSelectionContextType,
} from "../../deprecated/TextRangeSelectionContext";
import { useDrag } from "react-dnd";
import clsx from "clsx";

const predefinedColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];

export function CursorGhost({ pos }: { pos: CursorPosition }) {
  const { setIsDragging } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );

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
}
