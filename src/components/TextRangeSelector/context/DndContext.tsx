import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { CursorPosition } from "./RangeContext";

export type Coords = {
  top: number;
  left: number;
};

export type CoordsWithPos = Coords & {
  pos: CursorPosition;
};

export type DndContextType = {
  isDragging: boolean;
  startCoords: CoordsWithPos;
  endCoords: CoordsWithPos;
  setIsDragging: () => void;
  setIsDropping: () => void;
  setStartCoords: (coords: CoordsWithPos) => void;
  setEndCoords: (coords: CoordsWithPos) => void;
  setContainerCoords: (coords: Coords) => void;
};

export const DndContext = createContext<DndContextType>({} as DndContextType);

export const DndProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDragging, _setIsDragging] = useState(false);
  const [startCoords, _setStartCoords] = useState<CoordsWithPos>({
    top: 0,
    left: 0,
    pos: { pos: -1, type: "s", index: -1 },
  });
  const [endCoords, _setEndCoords] = useState<CoordsWithPos>({
    top: 0,
    left: 0,
    pos: { pos: -1, type: "e", index: -1 },
  });
  const [containerCoords, _setContainerCoords] = useState<Coords>({
    top: 0,
    left: 0,
  });

  const setIsDragging = () => {
    _setIsDragging(true);
  };

  const setIsDropping = () => {
    _setIsDragging(false);
  };

  const setStartCoords = (coords: CoordsWithPos) => {
    const top = coords.top - containerCoords.top;
    const left = coords.left - containerCoords.left;

    // 如果坐标没有变化，不更新
    if (startCoords.top === top && startCoords.left === left) {
      return;
    }

    _setStartCoords({
      top,
      left,
      pos: coords.pos,
    });
  };

  const setEndCoords = (coords: CoordsWithPos) => {
    const top = coords.top - containerCoords.top;
    const left = coords.left - containerCoords.left;

    // 如果坐标没有变化，不更新
    if (endCoords.top === top && endCoords.left === left) {
      return;
    }

    _setEndCoords({
      top,
      left,
      pos: coords.pos,
    });
  };

  const setContainerCoords = (coords: Coords) => {
    _setContainerCoords(coords);
  };

  return (
    <DndContext.Provider
      value={{
        isDragging,
        startCoords,
        endCoords,
        setIsDragging,
        setIsDropping,
        setStartCoords,
        setEndCoords,
        setContainerCoords,
      }}
    >
      <>{children}</>
      {/* debugger */}
      {createPortal(
        <div className="flex absolute top-0 right-0 bg-gray-100 p-2 text-sm gap-1 overflow-y-scroll">
          <div>
            <h5>正在拖动:</h5>
            {isDragging ? "是" : "否"}
          </div>
          <div>
            <h5>开始坐标:</h5>
            <pre>{JSON.stringify(startCoords, null, 2)}</pre>
          </div>
          <div>
            <h5>结束坐标:</h5>
            <pre>{JSON.stringify(endCoords, null, 2)}</pre>
          </div>
        </div>,
        document.body
      )}
    </DndContext.Provider>
  );
};
