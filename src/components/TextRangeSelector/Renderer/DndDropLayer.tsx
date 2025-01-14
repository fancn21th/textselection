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
  isActivated,
  isDeactivated,
}: {
  children: React.ReactNode;
  index: number;
  onDrop: (pos: CursorPosition, newPos: number) => void;
  onHover: (index: number) => void;
  isActivated: boolean;
  isDeactivated: boolean;
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
        isOver && "border-l-2 border-l-red-700", // 拖拽悬停
        isActivated && !isDeactivated && "bg-yellow-300 opacity-50", // 扩展激活区域
        isDeactivated && "bg-transparent" // 缩小激活区域
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
  const atMiddle = start <= hoverIndex && hoverIndex < end;

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
            const isInActivatedRange = start <= pos && pos < end;
            // 左侧增加
            const isLeft =
              draggingObj?.type === "s" &&
              atLeft &&
              hoverIndex <= pos &&
              pos < start;
            // 右侧增加
            const isRight =
              draggingObj?.type === "e" &&
              atRight &&
              end <= pos &&
              pos < hoverIndex;
            // 左侧减少
            const isLeftReduce =
              draggingObj?.type === "s" &&
              atMiddle &&
              start < pos &&
              pos < hoverIndex;
            // 右侧减少
            const isRightReduce =
              draggingObj?.type === "e" &&
              atMiddle &&
              hoverIndex <= pos &&
              pos < end;

            return (
              <Char
                key={index}
                index={pos}
                onDrop={onDrop}
                onHover={onHover}
                isActivated={isInActivatedRange || isLeft || isRight}
                isDeactivated={isLeftReduce || isRightReduce}
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
