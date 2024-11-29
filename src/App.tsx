import clsx from "clsx";
import { DndProvider, useDrag } from "react-dnd";
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
};

function Cursor() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CURSOR",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span className="text-red-400" ref={drag}>
      |
    </span>
  );
}

function App() {
  const [content] = useState(text.split(splitter));
  const [cursors] = useState<OriginCursor[]>([
    { s: 100, e: 300 },
    { s: 200, e: 500 },
    { s: 400, e: 600 },
    { s: 600, e: 700 },
  ]);
  const [resolvedCursors, setResolvedCursors] = useState<ResolvedCursor[]>([]);

  useEffect(() => {
    // 排序
    const sorted = cursors.slice().sort((a, b) => a.s - b.s);
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

    console.log({ indexed });

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

    console.log({ overlapped });

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

    console.log({ deduped });

    // 填充空隙
    const gapFilled = [];
    let lastEnd = 0;
    for (const { s, e, index, overLapped } of deduped) {
      if (s > lastEnd) {
        gapFilled.push({ s: lastEnd, e: s });
      }
      gapFilled.push({ s, e, index, overLapped });
      lastEnd = e;
    }
    if (lastEnd < content.length) {
      gapFilled.push({ s: lastEnd, e: content.length });
    }

    console.log({ gapFilled });

    setResolvedCursors(gapFilled);
  }, [cursors]);

  const parts = resolvedCursors.map((cursor) => {
    const text = content.slice(cursor.s, cursor.e);
    return {
      text,
      index: cursor.index,
      overLapped: cursor.overLapped,
    };
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-10">
        <h3>段落</h3>
        <hr className="my-2" />
        <p className="mb-2">
          {parts.map((part, index) => {
            const even = !!(
              (part.index && part.index % 2 === 0) ||
              part.index === 0
            );
            const odd = !!(part.index && part.index % 2 === 1);

            return (
              <Fragment key={index}>
                <span
                  className={clsx(
                    !part.overLapped && even && "bg-red-300",
                    !part.overLapped && odd && "bg-green-300",
                    part.overLapped && "bg-gray-300"
                  )}
                >
                  {part.text}
                </span>
                <Cursor />
              </Fragment>
            );
          })}
        </p>
        <hr className="my-2" />
        <h3>原文</h3>
        <p className="mb-2">{text}</p>
        <hr className="my-2" />
        {/* debug info */}
        <div className="border mb-2 p-2">长度: {content.length}</div>
        {/* action */}
      </div>
    </DndProvider>
  );
}

export default App;
