import clsx from "clsx";

import { useContext } from "react";
import { useDrop } from "react-dnd";
import { CursorPosition, NewTRSContext } from "../context/NewTRSContext";

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
function DndLayer({ text }: { text: string }) {
  // const { cursorPositions } = useContext(NewTRSContext);

  // console.log({ cursorPositions });

  // const onDrop = (pos: CursorPosition, newPos: number) => {
  //   setCursors((prevCursors) => {
  //     return prevCursors.map((cursor: OriginCursor, index: number) => {
  //       if (pos.origin === index) {
  //         if (pos.type === "s") {
  //           return { ...cursor, s: newPos };
  //         }
  //         if (pos.type === "e") {
  //           return { ...cursor, e: newPos };
  //         }
  //       }
  //       return cursor;
  //     });
  //   });
  // };

  return (
    <>
      {/* {text.split(splitter).map((char, index) => (
        <Char key={index} index={index} onDrop={onDrop}>
          {char}
        </Char>
      ))} */}
    </>
  );
}

export default DndLayer;
