import { useContext, useEffect } from "react";
import {
  TextRangeSelectionContext,
  TextRangeSelectionProvider,
} from "./context/TextRangeSelectionContext";
import TextRender from "./TextRender";
import { NewTRSContext, NewTRSProvider } from "./context/NewTRSContext";

function Render({ text }: { text: string }) {
  const { setText } = useContext(TextRangeSelectionContext);
  const { setFullText } = useContext(NewTRSContext);

  useEffect(() => {
    setText(text);
    setFullText(text);
  }, []);

  return (
    <div className="relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll">
      <TextRender></TextRender>
    </div>
  );
}

function TextRangeSelector({ text }: { text: string }) {
  return (
    <TextRangeSelectionProvider>
      <NewTRSProvider>
        <Render text={text}></Render>
      </NewTRSProvider>
    </TextRangeSelectionProvider>
  );
}

export default TextRangeSelector;
