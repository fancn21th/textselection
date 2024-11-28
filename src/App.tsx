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
    { s: 600, e: 800 },
    { s: 100, e: 200 },
    { s: 200, e: 400 },
    { s: 400, e: 600 },
  ]);
  const [resolvedCursors, setResolvedCursors] = useState<
    { s: number; e: number }[]
  >([]);

  useEffect(() => {
    // 首先按照开始位置排序
    const indexed = cursors.map((cursor, index) => {
      return { ...cursor, index };
    });
    const sorted = indexed.sort((a, b) => a.s - b.s);
    const filled = [];
    let lastEnd = 0;

    for (const { s, e } of sorted) {
      if (s > lastEnd) {
        // 插入缺失的区间
        filled.push({ s: lastEnd, e: s });
      }
      filled.push({ s, e });
      lastEnd = e;
    }
    // 填充空缺
    setResolvedCursors(sorted);
  }, [cursors]);

  const parts = resolvedCursors.map((cursor) => {
    const text = content.slice(cursor.s, cursor.e);
    return {
      text,
    };
  });

  console.log(cursors);

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
                  index
                    ? index % 2 === 0
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
