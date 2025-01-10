import { createContext, useState } from "react";
import { createPortal } from "react-dom";

export type DndContextType = {
  isDragging: boolean;
  setIsDragging: () => void;
  setIsDropping: () => void;
};

export const DndContext = createContext<DndContextType>({} as DndContextType);

export const DndProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDragging, _setIsDragging] = useState(false);

  const setIsDragging = () => {
    _setIsDragging(true);
  };

  const setIsDropping = () => {
    _setIsDragging(false);
  };

  return (
    <DndContext.Provider value={{ isDragging, setIsDragging, setIsDropping }}>
      <>{children}</>
      {/* debugger */}
      {createPortal(
        <div className="flex absolute top-0 right-0 bg-gray-100 p-2 text-sm gap-1 overflow-y-scroll">
          <div>
            <h5>正在拖动:</h5>
            {isDragging ? "是" : "否"}
          </div>
        </div>,
        document.body
      )}
    </DndContext.Provider>
  );
};
