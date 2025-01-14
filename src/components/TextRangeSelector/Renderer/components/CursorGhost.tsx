import clsx from "clsx";
import { CursorPosition } from "../../context/RangeContext";

import { useContext, useEffect, useRef } from "react";
import { DndContext } from "../../context/DndContext";

export function CursorGhost({ pos }: { pos: CursorPosition }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const { setStartCoords, setEndCoords } = useContext(DndContext);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      if (pos.type === "s") {
        setStartCoords({
          top: rect.top,
          left: rect.left,
          pos: pos,
        });
      }
      if (pos.type === "e") {
        setEndCoords({
          top: rect.top,
          left: rect.left,
          pos: pos,
        });
      }
    }
  }, []);

  return (
    <span
      className={clsx(
        "font-extrabold text-pink-500",
        "absolute z-50 cursor-move"
      )}
      ref={elementRef}
    >
      |
    </span>
  );
}
