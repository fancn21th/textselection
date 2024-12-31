import clsx from "clsx";

import { useContext } from "react";
import { useDrop } from "react-dnd";
import {
  CursorPosition,
  NewTRSContext,
  OriginTextRange,
} from "../context/NewTRSContext";

const splitter = "";

function Char({
  children,
  index,
  onDrop,
}: {
  children: React.ReactNode;
  index: number;
  onDrop: (pos: CursorPosition, newPos: number) => void;
}) {
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
    <span
      ref={drop}
      className={clsx("text-transparent", isOver && "bg-gray-200")}
    >
      {children}
    </span>
  );
}

// TODO: 性能优化
function DndLayer({ text, startPos }: { text: string; startPos: number }) {
  const { setTextRanges, setIsDropping, isDragging } =
    useContext(NewTRSContext);

  const onDrop = (pos: CursorPosition, newPos: number) => {
    setIsDropping();
    setTextRanges((pre: OriginTextRange[]) => {
      return pre.map((range: OriginTextRange, index: number) => {
        if (pos.index === index) {
          if (pos.type === "s") {
            return { ...range, s: newPos };
          }
          if (pos.type === "e") {
            return { ...range, e: newPos };
          }
        }
        return range;
      });
    });
  };

  return (
    <>
      {isDragging
        ? text.split(splitter).map((char, index) => (
            <Char key={index} index={index + startPos} onDrop={onDrop}>
              {char}
            </Char>
          ))
        : null}
    </>
  );
}

export default DndLayer;
