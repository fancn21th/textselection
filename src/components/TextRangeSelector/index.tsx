import { useContext, useEffect } from "react";
import TextRender from "./TextRender";
import { NewTRSContext, NewTRSProvider } from "./context/NewTRSContext";

function Render({ text }: { text: string }) {
  const { setFullText, setTextRanges } = useContext(NewTRSContext);

  useEffect(() => {
    setFullText(text);
    setTextRanges([
      { s: 20, e: 30 },
      { s: 25, e: 40 },
      { s: 35, e: 50 },
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
