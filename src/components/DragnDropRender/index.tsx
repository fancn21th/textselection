import clsx from "clsx";
import { useDrag, useDrop } from "react-dnd";

const predefinedColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];

const splitter = "";

function Cursor({ pos }: { pos: CursorPosition }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CURSOR",
    item: () => {
      return pos;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      className={clsx(
        "font-extrabold",
        predefinedColors[pos.origin % predefinedColors.length],
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}

export function CursorGhost({ index }: { index: number }) {
  return (
    <span
      className={clsx(
        "font-extrabold absolute",
        predefinedColors[index % predefinedColors.length]
      )}
    >
      |
    </span>
  );
}

export type CursorPosition = {
  pos: number;
  type: string;
  origin: number;
};

export type CharType = {
  isCursor: boolean;
  char: string;
  pos: CursorPosition | null;
  index: number;
};

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
    <span ref={drop} className={clsx(isOver && "bg-gray-200")}>
      {children}
    </span>
  );
}

function DragNDrop({
  text,
  setCursors,
}: {
  text: string;
  setCursors: React.Dispatch<React.SetStateAction<CursorPosition[]>>;
}) {
  let pos = 0;

  const onDrop = (pos: CursorPosition, newPos: number) => {
    setCursors((prevCursors) => {
      return prevCursors.map((cursor, index) => {
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

  const chars = text.split(splitter).reduce<CharType[]>((acc, char, index) => {
    const append: CharType[] = [{ char, index, isCursor: false, pos: null }];
    if (pos < sortedPositions.length && sortedPositions[pos].pos === index) {
      append.unshift({
        char: "",
        index,
        isCursor: true,
        pos: sortedPositions[pos],
      });
      pos++;
    }
    return [...acc, ...append];
  }, []);

  return (
    <>
      {chars.map((char, index) => {
        if (char.isCursor && char.pos) {
          return <Cursor key={index} pos={char.pos}></Cursor>;
        }
        return (
          <Char key={index} index={char.index} onDrop={onDrop}>
            {char.char}
          </Char>
        );
      })}
    </>
  );
}

export default DragNDrop;
