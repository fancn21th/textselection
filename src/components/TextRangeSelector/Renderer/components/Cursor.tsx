import { useContext } from "react";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import { CursorPosition, NewTRSContext } from "../../context/NewTRSContext";

export function CursorGhost({ pos }: { pos: CursorPosition }) {
  const { setIsDragging, setIsDropping } = useContext(NewTRSContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CURSOR",
    item: () => {
      setIsDragging();
      return pos;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => {
      setIsDropping();
    },
  }));

  return (
    <span
      className={clsx(
        // "text-transparent",
        "font-extrabold text-pink-500",
        "absolute z-50 cursor-move",
        "pointer-events-auto",
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}
