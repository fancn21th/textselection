import { useContext, useEffect } from "react";
import TextRender from "./Renderer";
import { NewTRSContext, NewTRSProvider } from "./context/NewTRSContext";

function Render({ text }: { text: string }) {
  const { setFullText, setTextRanges } = useContext(NewTRSContext);

  useEffect(() => {
    setFullText(text);
    setTextRanges([
      { s: 0, e: 10 },
      { s: 5, e: 20 },
      { s: 15, e: 25 },
      // { s: 1000, e: 1100 },
    ]);
  }, []);

  return (
    <div className="relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll">
      <TextRender></TextRender>
    </div>
  );
}

function TextRangeSelector({ text }: { text: string }) {
  return (
    <NewTRSProvider>
      <Render text={text}></Render>
    </NewTRSProvider>
  );
}

export default TextRangeSelector;
