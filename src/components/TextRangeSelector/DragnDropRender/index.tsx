import clsx from "clsx";
import { useContext, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type {
  OriginCursor,
  TextRangeSelectionContextType,
  CursorPosition,
} from "../context/TextRangeSelectionContext";

const predefinedColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];

const splitter = "";

export function CursorGhost({ pos }: { index: number; pos: CursorPosition }) {
  const { setIsDragging } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CURSOR",
    item: () => {
      return pos;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging]);

  return (
    <span
      className={clsx(
        // "text-transparent",
        "font-extrabold",
        "absolute z-50 cursor-move",
        predefinedColors[pos.origin % predefinedColors.length],
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}

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

function DragNDrop() {
  const { text, setCursors, isDragging } =
    useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);

  const onDrop = (pos: CursorPosition, newPos: number) => {
    setCursors((prevCursors) => {
      return prevCursors.map((cursor: OriginCursor, index: number) => {
        if (pos.origin === index) {
          if (pos.type === "s") {
            return { ...cursor, s: newPos };
          }
          if (pos.type === "e") {
            return { ...cursor, e: newPos };
          }
        }
        return cursor;
      });
    });
  };

  return (
    <div
      className={clsx(
        "absolute z-30 dndLayer",
        !isDragging && "pointer-events-none"
      )}
    >
      {text.split(splitter).map((char, index) => (
        <Char key={index} index={index} onDrop={onDrop}>
          {char}
        </Char>
      ))}
    </div>
  );
}

export default DragNDrop;
