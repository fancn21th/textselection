import { useContext, useMemo } from "react";
import { CoordsWithPos, DndContext } from "../context/DndContext";
import clsx from "clsx";
import { Cursor } from "./components/Cursor";
import React from "react";

const DndDragHandler = React.memo(
  ({
    startCoords,
    endCoords,
  }: {
    startCoords: CoordsWithPos;
    endCoords: CoordsWithPos;
  }) => {
    console.log({ DndDragHandler });

    return (
      <div className="w-[100%] h-[600px] bg-transparent absolute left-0 top-0 pointer-events-none">
        {startCoords.pos.index !== -1 && (
          <div
            className={clsx(
              "font-extrabold text-pink-500",
              "absolute z-50 cursor-move pointer-events-auto"
            )}
            style={{
              left: `${startCoords.left}px`,
              top: `${startCoords.top}px`,
            }}
          >
            <Cursor pos={startCoords.pos} />
          </div>
        )}
        {endCoords.pos.index !== -1 && (
          <div
            className={clsx(
              "font-extrabold text-pink-500",
              "absolute z-50 cursor-move pointer-events-auto"
            )}
            style={{ left: `${endCoords.left}px`, top: `${endCoords.top}px` }}
          >
            <Cursor pos={endCoords.pos} />
          </div>
        )}
      </div>
    );
  }
);

const DndDragHandlerLayer = () => {
  const { startCoords, endCoords } = useContext(DndContext);

  const memoizedStartCoords = useMemo(() => startCoords, [startCoords]);
  const memoizedEndCoords = useMemo(() => endCoords, [endCoords]);

  return (
    <DndDragHandler
      startCoords={memoizedStartCoords}
      endCoords={memoizedEndCoords}
    />
  );
};

export default DndDragHandlerLayer;
