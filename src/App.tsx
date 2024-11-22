import { useState, Fragment } from "react";
import ActionPanel from "./components/ActionPanel";
import "./App.css";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis eveniet quisquam iure, repellendus dicta eos consequatur id minima, reprehenderit tempore ipsa neque quidem quia unde. Corrupti doloremque molestias minima nesciunt eum. Cum quae tenetur est minima ut! Eveniet, iste asperiores delectus quam minus in blanditiis corrupti quas quasi neque officiis qui quidem sapiente. In sed, eligendi repudiandae soluta molestias beatae eum nisi quas ipsum, vel aperiam itaque tempore quis consequatur mollitia, natus placeat dolore obcaecati eaque quasi similique. Ducimus quisquam ut veritatis laudantium veniam, itaque eaque amet libero pariatur unde. Modi aliquam tenetur ipsam voluptatibus rem laborum mollitia assumenda?
`;

function App() {
  const [content] = useState(text.split(" "));
  const [startCursorIndex, setStartCursorIndex] = useState(0);
  const [endCursorIndex, setEndCursorIndex] = useState(content.length - 1);

  const go = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button === 0)
      // Decrement cursor position (loop back at start)
      setStartCursorIndex(
        (prev) => (prev - 1 + content.length) % content.length
      );
    if (event.button === 2)
      setStartCursorIndex((prev) => (prev + 1) % content.length);
  };

  return (
    <>
      <div className="p-10">
        <h3>段落</h3>
        <hr className="my-2" />
        <p className="mb-2">
          {content.map((word, idx) => (
            <Fragment key={idx}>
              {idx === startCursorIndex ? (
                <span className="border-r-4 border-r-red-500 pr-1">🙉</span>
              ) : null}
              {idx === endCursorIndex ? (
                <span className="border-l-4 border-l-red-500 pl-1">🙈</span>
              ) : null}
              {word}{" "}
            </Fragment>
          ))}
        </p>
        <h3>选中段落</h3> <hr className="my-2" />
        <p className="mb-2">
          {content.map((word, idx) => {
            if (idx < startCursorIndex) return;
            if (idx > endCursorIndex) return;
            return <Fragment key={idx}>{word} </Fragment>;
          })}
        </p>
        <ActionPanel
          onClick={(type, isAdd) => {
            console.log(type, isAdd);
          }}
        />
      </div>
    </>
  );
}

export default App;
