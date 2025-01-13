import { useContext } from "react";
import { DndContext } from "../context/DndContext";
import clsx from "clsx";

const DndDragHandlerLayer = () => {
  const { startCoords, endCoords } = useContext(DndContext);

  return (
    <div className="w-[100%] h-[600px] bg-transparent absolute left-0 top-0 pointer-events-none">
      <span
        className={clsx(
          "font-extrabold text-pink-500",
          "absolute z-50 cursor-move pointer-events-auto"
        )}
        style={{ left: `${startCoords.left}px`, top: `${startCoords.top}px` }}
      >
        X
      </span>
      <span
        className={clsx(
          "font-extrabold text-pink-500",
          "absolute z-50 cursor-move pointer-events-auto"
        )}
        style={{ left: `${endCoords.left}px`, top: `${endCoords.top}px` }}
      >
        X
      </span>
    </div>
  );
};

export default DndDragHandlerLayer;
