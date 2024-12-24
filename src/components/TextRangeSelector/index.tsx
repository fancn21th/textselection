import { useContext, useEffect } from "react";
import {
  TextRangeSelectionContext,
  TextRangeSelectionProvider,
} from "./context/TextRangeSelectionContext";
import TextRender from "./TextRender";
import BackgroundRender from "./BackgroundRender";
import DragnDropRender from "./DragnDropRender";

function Render({ text }: { text: string }) {
  const { setText } = useContext(TextRangeSelectionContext);

  useEffect(() => {
    setText(text);
  }, []);

  return (
    <div className="relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll">
      {/* <DragnDropRender></DragnDropRender>
      <BackgroundRender></BackgroundRender> */}
      <TextRender></TextRender>
    </div>
  );
}

function TextRangeSelector({ text }: { text: string }) {
  return (
    <TextRangeSelectionProvider>
      <Render text={text}></Render>
    </TextRangeSelectionProvider>
  );
}

export default TextRangeSelector;
