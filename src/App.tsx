import clsx from "clsx";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Fragment, useEffect, useState } from "react";
// import ActionPanel from "./components/ActionPanel";
import "./App.css";

const splitter = "";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis eveniet quisquam iure, repellendus dicta eos consequatur id minima, reprehenderit tempore ipsa neque quidem quia unde. Corrupti doloremque molestias minima nesciunt eum. Cum quae tenetur est minima ut! Eveniet, iste asperiores delectus quam minus in blanditiis corrupti quas quasi neque officiis qui quidem sapiente. In sed, eligendi repudiandae soluta molestias beatae eum nisi quas ipsum, vel aperiam itaque tempore quis consequatur mollitia, natus placeat dolore obcaecati eaque quasi similique. Ducimus quisquam ut veritatis laudantium veniam, itaque eaque amet libero pariatur unde. Modi aliquam tenetur ipsam voluptatibus rem laborum mollitia assumenda?
`;

type OriginCursor = { s: number; e: number };
type MarkedCursor = {
  s: number;
  e: number;
  index: number;
  tailOverlapped: number;
  headOverlapped: number;
};
type ResolvedCursor = {
  s: number;
  e: number;
  index?: number;
  overLapped?: boolean;
  isGap?: boolean;
};
type CursorPosition = {
  pos: number;
  type: string;
  origin: number;
};
type Part = {
  text: string; // 段落内容
  index: number; // 段落索引
  overLapped: boolean; // 是否重叠部分
  isGap: boolean; // 是否空隙
  isEven: boolean; // 是否索引偶数
  isOdd: boolean; // 是否索引奇数
};
type Combo = Part | CursorPosition;
type CharType = {
  isCursor: boolean;
  char: string;
  pos: CursorPosition | null;
  index: number;
};

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
        "text-red-400 font-extrabold",
        isDragging && "opacity-50"
      )}
      ref={drag}
    >
      |
    </span>
  );
}

function CursorGhost() {
  return <span className="text-red-400">|</span>;
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
    <span ref={drop} className={clsx(isOver && "bg-gray-200")}>
      {children}
    </span>
  );
}

function App() {
  const [content] = useState(text.split(splitter));
  const [cursors, setCursors] = useState<OriginCursor[]>([
    { s: 100, e: 300 },
    { s: 200, e: 500 },
    // { s: 400, e: 600 },
    // { s: 600, e: 700 },
  ]);
  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);

  useEffect(() => {
    // 排序
    const sorted = cursors.slice().sort((a, b) => a.s - b.s);
    // console.log({ sorted });

    const indexed = sorted.map(
      (cursor, index): MarkedCursor => ({
        ...cursor,
        index,
        tailOverlapped: -1,
        headOverlapped: -1,
      })
    );

    // 标记重叠
    let last = indexed[0];
    for (let i = 1; i < indexed.length; i++) {
      const current = indexed[i];
      // 如果 current.s < last.e 说明有重叠
      if (current.s < last.e) {
        last.tailOverlapped = current.s;
        current.headOverlapped = last.e;
      }
      last = current;
    }

    // console.log({ indexed });

    // 重叠处理
    const overlapped = indexed.reduce<ResolvedCursor[]>((acc, current) => {
      if (current.headOverlapped !== -1 && current.tailOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.headOverlapped,
            index: current.index,
            overLapped: true,
          },
          {
            s: current.headOverlapped,
            e: current.tailOverlapped,
            index: current.index,
            overLapped: false,
          },
          {
            s: current.tailOverlapped,
            e: current.e,
            index: current.index,
            overLapped: true,
          },
        ];
      }
      if (current.headOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.headOverlapped,
            index: current.index,
            overLapped: true,
          },
          {
            s: current.headOverlapped,
            e: current.e,
            index: current.index,
            overLapped: false,
          },
        ];
      }
      if (current.tailOverlapped !== -1) {
        return [
          ...acc,
          {
            s: current.s,
            e: current.tailOverlapped,
            index: current.index,
            overLapped: false,
          },
          {
            s: current.tailOverlapped,
            e: current.e,
            index: current.index,
            overLapped: true,
          },
        ];
      }
      return [...acc, { ...current, index: current.index, overLapped: false }];
    }, []);

    // console.log({ overlapped });

    // 去掉重复的 重叠
    const deduped = [];
    const pos = new Set();
    for (const cursor of overlapped) {
      const key = `${cursor.s}-${cursor.e}`;
      if (!pos.has(key)) {
        pos.add(key);
        deduped.push(cursor);
      }
    }

    // console.log({ deduped });

    // 填充空隙
    const gapFilled = [];
    let lastEnd = 0;
    for (const { s, e, index, overLapped } of deduped) {
      if (s > lastEnd) {
        gapFilled.push({ s: lastEnd, e: s, isGap: true });
      }
      gapFilled.push({ s, e, index, overLapped });
      lastEnd = e;
    }
    if (lastEnd < content.length) {
      gapFilled.push({ s: lastEnd, e: content.length, isGap: true });
    }

    // console.log({ gapFilled });

    setResolvedCursors(gapFilled);
  }, [cursors]);

  // derived state 以下都是派生状态

  // Cursor 坐标
  const cursorPositions = cursors.reduce<CursorPosition[]>(
    (acc, cursor, index) => {
      return [
        ...acc,
        { pos: cursor.s, type: "s", origin: index },
        { pos: cursor.e, type: "e", origin: index },
      ];
    },
    []
  );

  // console.log({ cursorPositions });

  const sortedPositions = cursorPositions.slice().sort((a, b) => a.pos - b.pos);

  // console.log({ sortedPositions });

  let pos = 0;
  const parts = resolvedCursors.reduce<Combo[]>((acc, cursor) => {
    const text = content.slice(cursor.s, cursor.e).join("");
    const append: Combo[] = [
      {
        text,
        index: cursor.index!,
        overLapped: cursor.overLapped!,
        isGap: cursor.isGap!,
        isEven: cursor.index! % 2 === 0,
        isOdd: cursor.index! % 2 === 1,
      },
    ];
    if (pos < sortedPositions.length) {
      if (
        sortedPositions[pos].type === "s" &&
        cursor.s === sortedPositions[pos].pos
      ) {
        append.unshift({
          ...sortedPositions[pos],
        });
        pos++;
      }
      if (
        sortedPositions[pos].type === "e" &&
        cursor.e === sortedPositions[pos].pos
      ) {
        append.push({
          ...sortedPositions[pos],
        });
        pos++;
      }
    }
    return [...acc, ...append];
  }, []);

  // console.log({ parts });

  pos = 0;
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-10">
        <h3>高亮 不可拖拽</h3>
        <hr className="my-2" />
        <p className="mb-2">
          {parts.map((part, index) => {
            if ("text" in part) {
              return (
                <Fragment key={index}>
                  <span
                    className={clsx(
                      !part.overLapped && part.isEven && "bg-red-300",
                      !part.overLapped && part.isOdd && "bg-green-300",
                      part.overLapped && "bg-gray-300"
                    )}
                  >
                    {part.text}
                  </span>
                </Fragment>
              );
            }
            return <CursorGhost key={index}></CursorGhost>;
          })}
        </p>
        <hr className="my-2" />
        <h3>Span-ed 拖拽可行</h3>
        <hr className="my-2" />
        <p className="mb-2">
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
        </p>
        <hr className="my-2" />
        <h3>原文</h3>
        <hr className="my-2" />
        <p className="mb-2">{text}</p>
        <hr className="my-2" />
        {/* debug info */}
        <div className="border mb-2 p-2">
          <ul>
            <li>长度: {content.length}</li>
            <li>
              分段:
              <pre>{JSON.stringify(cursors, null, 2)}</pre>
            </li>
          </ul>
        </div>
        {/* action */}
      </div>
    </DndProvider>
  );
}

export default App;
