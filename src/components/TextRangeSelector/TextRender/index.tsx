import { useContext } from "react";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type { TextRangeSelectionContextType } from "../context/TextRangeSelectionContext";
import clsx from "clsx";

function Text() {
  const { text, isDragging } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );
  return (
    <div
      className={clsx(
        "absolute z-20 textLayer ",
        !isDragging && "pointer-events-none"
      )}
    >
      {/* text layer */}
      {text}
    </div>
  );
}

export default Text;
