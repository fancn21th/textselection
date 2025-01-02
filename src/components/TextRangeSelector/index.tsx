import { useContext, useEffect } from "react";
import Renderer from "./Renderer";
import { NewTRSContext, NewTRSProvider } from "./context/NewTRSContext";
import { generateRandomRangesWithPercentage } from "./helper";

function Render({ text }: { text: string }) {
  const { setFullText, setTextRanges } = useContext(NewTRSContext);

  useEffect(() => {
    setFullText(text);
    // setTextRanges(generateRandomRangesWithPercentage(text.length));
    setTextRanges([
      {
        s: 0,
        e: 20,
      },
      {
        s: 15,
        e: 40,
      },
    ]);
  }, []);

  return (
    <div className="flex gap-1">
      <div className="w-[900px] h-[550px] border border-red-500 overflow-y-scroll">
        <Renderer></Renderer>
      </div>
      <div className="flex-1 h-[550px] border border-blue-500 overflow-y-scroll">
        <pre>{text}</pre>
      </div>
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
