import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TextRender from "./components/TextRender";

import text from "./text.txt?raw";
import BackgroundRender from "./components/BackgroundRender";

function App() {
  // console.log({ parts });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-10">
        <h3>原文</h3>
        <hr className="my-2" />
        <div>
          <TextRender text={text}></TextRender>
          <BackgroundRender text={text}></BackgroundRender>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
