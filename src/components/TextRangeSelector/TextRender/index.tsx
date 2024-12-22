import { useContext } from "react";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type { TextRangeSelectionContextType } from "../context/TextRangeSelectionContext";

function Text() {
  const { text } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );
  return (
    <div className="absolute z-20">
      {/* text layer */}
      {text}
    </div>
  );
}

export default Text;