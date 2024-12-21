import { useContext } from "react";
import {
  TextRangeSelectionContext,
  TextRangeSelectionContextType,
} from "../../context/TextRangeSelectionContext";

function Text() {
  const { text } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );
  return <div className="absolute">{text}</div>;
}

export default Text;
