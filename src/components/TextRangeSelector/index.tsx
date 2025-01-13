import { useContext, useEffect, useRef } from "react";
import Renderer from "./Renderer";
import { RangeContext, RangeProvider } from "./context/RangeContext";
import { DndContext, DndProvider } from "./context/DndContext";
// import { generateRandomRangesWithPercentage } from "./helper";

function Render({ text }: { text: string }) {
  const { setFullText, setTextRanges } = useContext(RangeContext);
  const { setContainerCoords } = useContext(DndContext);
  const elementRef = useRef<HTMLDivElement>(null);

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
        e: 100,
      },
    ]);
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setContainerCoords({
        top: rect.top,
        left: rect.left,
      });
    }
  }, []);

  return (
    <div className="flex gap-1">
      <div
        className="w-[900px] h-[550px] border border-red-500 overflow-y-scroll relative"
        ref={elementRef}
      >
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
    <RangeProvider>
      <DndProvider>
        <Render text={text}></Render>
      </DndProvider>
    </RangeProvider>
  );
}

export default TextRangeSelector;
