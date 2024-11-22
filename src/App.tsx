import { useState, Fragment } from "react";
import ActionPanel from "./components/ActionPanel";
import "./App.css";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis eveniet quisquam iure, repellendus dicta eos consequatur id minima, reprehenderit tempore ipsa neque quidem quia unde. Corrupti doloremque molestias minima nesciunt eum. Cum quae tenetur est minima ut! Eveniet, iste asperiores delectus quam minus in blanditiis corrupti quas quasi neque officiis qui quidem sapiente. In sed, eligendi repudiandae soluta molestias beatae eum nisi quas ipsum, vel aperiam itaque tempore quis consequatur mollitia, natus placeat dolore obcaecati eaque quasi similique. Ducimus quisquam ut veritatis laudantium veniam, itaque eaque amet libero pariatur unde. Modi aliquam tenetur ipsam voluptatibus rem laborum mollitia assumenda?
`;

function App() {
  const [content] = useState(text.split(" ").filter((word) => word.length > 0));
  const [startCursorIndex, setStartCursorIndex] = useState(0);
  const [endCursorIndex, setEndCursorIndex] = useState(content.length - 1);

  return (
    <>
      <div className="p-10">
        <h3>段落</h3>
        <hr className="my-2" />
        <p className="mb-2">
          {content.map((word, idx) => {
            if (idx === startCursorIndex) {
              return (
                <Fragment key={idx}>
                  <span className="border-r-4 border-r-red-500 pr-1">🙉</span>
                </Fragment>
              );
            }
            if (idx === endCursorIndex) {
              return (
                <Fragment key={idx}>
                  {word}{" "}
                  <span className="border-l-4 border-l-red-500 pl-1">🙈</span>
                </Fragment>
              );
            }
            return <Fragment key={idx}>{word} </Fragment>;
          })}
        </p>
        <h3>选中段落</h3> <hr className="my-2" />
        <p className="mb-2">
          {content.map((word, idx) => {
            if (idx <= startCursorIndex) return;
            if (idx > endCursorIndex) return;
            return <Fragment key={idx}>{word} </Fragment>;
          })}
        </p>
        <hr className="my-2" />
        {/* debug info */}
        <div className="border mb-2">
          <div>
            <span>Start Cursor Index: {startCursorIndex}</span>
          </div>
          <div>
            <span>End Cursor Index: {endCursorIndex}</span>
          </div>
          <div>
            <span>Word Count: {content.length}</span>
          </div>
          <div>
            <span>Range Count: {endCursorIndex - startCursorIndex + 1}</span>
          </div>
        </div>
        {/* action */}
        <ActionPanel
          onClick={(type, isAdd) => {
            if (type === "start") {
              setStartCursorIndex((prev) => (prev + 1) % content.length);
            }
            if (type === "end") {
              setEndCursorIndex(
                (prev) => (prev - 1 + content.length) % content.length
              );
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
