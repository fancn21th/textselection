import { useEffect, useState } from "react";
// import ActionPanel from "./components/ActionPanel";
import "./App.css";

const splitter = "";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis eveniet quisquam iure, repellendus dicta eos consequatur id minima, reprehenderit tempore ipsa neque quidem quia unde. Corrupti doloremque molestias minima nesciunt eum. Cum quae tenetur est minima ut! Eveniet, iste asperiores delectus quam minus in blanditiis corrupti quas quasi neque officiis qui quidem sapiente. In sed, eligendi repudiandae soluta molestias beatae eum nisi quas ipsum, vel aperiam itaque tempore quis consequatur mollitia, natus placeat dolore obcaecati eaque quasi similique. Ducimus quisquam ut veritatis laudantium veniam, itaque eaque amet libero pariatur unde. Modi aliquam tenetur ipsam voluptatibus rem laborum mollitia assumenda?
`;

function App() {
  const [content] = useState(text.split(splitter));
  const [cursors] = useState([
    { s: 100, e: 300 },
    { s: 200, e: 500 },
    { s: 400, e: 600 },
    { s: 600, e: 700 },
  ]);
  const [resolvedCursors, setResolvedCursors] = useState<
    {
      s: number;
      e: number;
      index?: number;
      tailOverlapped?: number;
      headOverlapped?: number;
    }[]
  >([]);

  useEffect(() => {
    // 排序
    const sorted = cursors.slice().sort((a, b) => a.s - b.s);
    const indexed = sorted.map(
      (
        cursor,
        index
      ): {
        s: number;
        e: number;
        index: number;
        tailOverlapped: number;
        headOverlapped: number;
      } => ({
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

    // 填充空隙
    const filledCursors = [];
    let lastEnd = 0;
    for (const { s, e, index, headOverlapped, tailOverlapped } of indexed) {
      if (s > lastEnd) {
        filledCursors.push({ s: lastEnd, e: s });
      }
      filledCursors.push({ s, e, index, headOverlapped, tailOverlapped });
      lastEnd = e;
    }
    if (lastEnd < content.length) {
      filledCursors.push({ s: lastEnd, e: content.length });
    }

    console.log({ filledCursors });

    setResolvedCursors(filledCursors);
  }, [cursors]);

  const parts = resolvedCursors.map((cursor) => {
    const text = content.slice(cursor.s, cursor.e);
    return {
      text,
      index: cursor.index,
    };
  });

  return (
    <>
      <div className="p-10">
        <h3>段落</h3>
        <hr className="my-2" />
        <p className="mb-2">
          {parts.map((part, index) => {
            return (
              <span
                key={index}
                className={
                  part.index !== undefined
                    ? part.index % 2 === 0
                      ? "bg-red-300"
                      : "bg-green-300"
                    : "bg-transparent"
                }
              >
                {part.text}
              </span>
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
    </>
  );
}

export default App;
