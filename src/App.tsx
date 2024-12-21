import TextRender from "./components/TextRender";
import BackgroundRender from "./components/BackgroundRender";
import DragnDropRender from "./components/DragnDropRender";
import text from "./text.txt?raw";
import { TextRangeSelectionContext } from "./context/TextRangeSelectionContext";
import { useContext, useEffect } from "react";

function App() {
  // console.log({ parts });
  const { setText } = useContext(TextRangeSelectionContext);

  useEffect(() => {
    setText(text);
  }, []);

  return (
    <div className="p-10">
      <h1 className="font-bold">Text Range Selection</h1>
      <hr className="my-2" />
      <div className="relative w-[800px]">
        <DragnDropRender></DragnDropRender>
        <BackgroundRender></BackgroundRender>
        <TextRender></TextRender>
      </div>
    </div>
  );
}

export default App;
