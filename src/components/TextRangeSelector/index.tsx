import { memo, useContext, useEffect } from "react";
import { TextRangeSelectionContext, TextRangeSelectionProvider } from "./context/TextRangeSelectionContext";
// import TextRender from "./TextRender";
import BackgroundRender from "./BackgroundRender";
import DragnDropRender from "./DragnDropRender";

const Render = memo(({ text }: { text: string }) => {
  const { setText } = useContext(TextRangeSelectionContext);

  useEffect(() => {
    setText(text);
  }, []);

  return (
    <div className="relative w-full h-full overflow-auto">
      {/* z-10 */}
      <BackgroundRender></BackgroundRender>
      {/* z-20 */}
      {/* <TextRender></TextRender> */}
      {/* z-30 */}
      <DragnDropRender></DragnDropRender>
    </div>
  );
});

const TextRangeSelector = ({ text }: { text: string }) => {
  return (
    <TextRangeSelectionProvider>
      <Render text={text}></Render>
    </TextRangeSelectionProvider>
  );
};

export default memo(TextRangeSelector);
