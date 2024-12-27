import { useContext, useEffect } from "react";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import { NewTRSContext } from "../context/NewTRSContext";

const predefinedColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];

export function CursorGhost({ pos }: { pos: { index: number } }) {
  const { setIsDragging } = useContext(NewTRSContext);

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
        predefinedColors[pos.index % predefinedColors.length],
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}
