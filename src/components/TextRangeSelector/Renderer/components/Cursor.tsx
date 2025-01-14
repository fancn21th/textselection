import { useContext } from "react";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import { CursorPosition, RangeContext } from "../../context/RangeContext";
import { DndContext } from "../../context/DndContext";

export function Cursor({ pos }: { pos: CursorPosition }) {
  const { activatedObject } = useContext(RangeContext);
  const { setIsDragging, setIsDropping } = useContext(DndContext);

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
        "cursor-move",
        (isDragging || !activatedObject) && "opacity-0"
      )}
      ref={drag}
    >
      X
    </span>
  );
}
