import clsx from "clsx";

import { useContext } from "react";
import { useDrop } from "react-dnd";
import {
  CursorPosition,
  RangeContext,
  OriginTextRange,
} from "../context/RangeContext";
import { DndContext } from "../context/DndContext";
import React from "react";

const splitter = "";

const Char = React.memo(function ({
  children,
  index,
  onDrop,
  onHover,
  inActivatedRange,
}: {
  children: React.ReactNode;
  index: number;
  onDrop: (pos: CursorPosition, newPos: number) => void;
  onHover: (index: number) => void;
  inActivatedRange: boolean;
}) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CURSOR",
      hover() {
        onHover(index);
      },
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
      className={clsx(
        "text-transparent",
        isOver && "border-2 border-l-red-700", //
        inActivatedRange && "bg-yellow-300 opacity-50" //
      )}
    >
      {children}
    </span>
  );
});

function DndDropLayer({ text, startPos }: { text: string; startPos: number }) {
  const { setTextRanges, activatedObject } = useContext(RangeContext);
  const { isDragging, setHoverIndex, hoverIndex, draggingObj } =
    useContext(DndContext);

  const start = activatedObject?.activatedRange?.s || -1;
  const end = activatedObject?.activatedRange?.e || -1;
  const atLeft = hoverIndex < start;
  const atRight = hoverIndex > end;

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

  const onHover = (index: number) => {
    setHoverIndex(index);
  };

  return (
    <>
      {/* 只有在拖拽的时候才渲染 */}
      {isDragging
        ? text.split(splitter).map((char, index) => {
            const pos = index + startPos;
            // 是否在激活的范围内
            const inActivatedRange = start <= pos && pos < end;
            const isLeft =
              draggingObj?.type === "s" &&
              atLeft &&
              hoverIndex <= pos &&
              pos < start;

            const isRight =
              draggingObj?.type === "e" &&
              atRight &&
              end <= pos &&
              pos < hoverIndex;

            return (
              <Char
                key={index}
                index={pos}
                onDrop={onDrop}
                onHover={onHover}
                inActivatedRange={inActivatedRange || isLeft || isRight}
              >
                {char}
              </Char>
            );
          })
        : null}
    </>
  );
}

export default DndDropLayer;
