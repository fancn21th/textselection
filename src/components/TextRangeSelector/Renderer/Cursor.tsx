import { useContext, useEffect } from "react";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import { CursorPosition, NewTRSContext } from "../context/NewTRSContext";

export function CursorGhost({ pos }: { pos: CursorPosition }) {
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
    if (isDragging) setIsDragging();
  }, [isDragging, setIsDragging]);

  return (
    <span
      className={clsx(
        // "text-transparent",
        "font-extrabold text-pink-500",
        "absolute z-50 cursor-move",
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}
