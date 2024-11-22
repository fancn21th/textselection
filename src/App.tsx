import { useEffect, useState, Fragment } from "react";
import "./App.css";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis eveniet quisquam iure, repellendus dicta eos consequatur id minima, reprehenderit tempore ipsa neque quidem quia unde. Corrupti doloremque molestias minima nesciunt eum. Cum quae tenetur est minima ut! Eveniet, iste asperiores delectus quam minus in blanditiis corrupti quas quasi neque officiis qui quidem sapiente. In sed, eligendi repudiandae soluta molestias beatae eum nisi quas ipsum, vel aperiam itaque tempore quis consequatur mollitia, natus placeat dolore obcaecati eaque quasi similique. Ducimus quisquam ut veritatis laudantium veniam, itaque eaque amet libero pariatur unde. Modi aliquam tenetur ipsam voluptatibus rem laborum mollitia assumenda?
`;

function App() {
  const [content] = useState(text.split(" "));
  const [cursorIndex, setCursorIndex] = useState(0);

  const handleNext = () => {
    // Increment cursor position (loop back at end)
    setCursorIndex((prev) => (prev + 1) % content.length);
  };

  return (
    <div className="p-10" onClick={handleNext}>
      <p className="mb-2">
        {content.map((word, idx) => (
          <Fragment key={idx}>
            {idx === cursorIndex ? (
              <span className="text-red-500">&#x2588;</span>
            ) : null}
            {word} &nbsp;
          </Fragment>
        ))}
      </p>
    </div>
  );
}

export default App;
