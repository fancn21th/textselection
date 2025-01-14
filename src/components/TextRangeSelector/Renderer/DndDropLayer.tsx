import clsx from "clsx";

import { useContext } from "react";
import { useDrop } from "react-dnd";
import {
  CursorPosition,
  RangeContext,
  OriginTextRange,
} from "../context/RangeContext";
import { DndContext } from "../context/DndContext";

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
        item: monitor.getItem(),
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

function DndLayer({ text, startPos }: { text: string; startPos: number }) {
  const { setTextRanges } = useContext(RangeContext);
  const { isDragging } = useContext(DndContext);

  const onDrop = (pos: CursorPosition, newPos: number) => {
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
      {/* 只有在拖拽的时候才渲染 */}
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
