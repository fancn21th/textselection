import { memo } from "react";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { CursorPosition } from "../../context/TextRangeSelectionContext";

const style = {
  contentVisibility: "auto",
};

const Char = memo(({ children, index, onDrop }: { children: React.ReactNode; index: number; onDrop: (pos: CursorPosition, newPos: number) => void }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CURSOR",
      drop: (item) => {
        onDrop(item as CursorPosition, index);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index]
  );

  return (
    <span ref={drop} style={{...style}} className={clsx("text-transparent", isOver && "bg-gray-200")}>
      {children}
    </span>
  );
});

export default Char;
