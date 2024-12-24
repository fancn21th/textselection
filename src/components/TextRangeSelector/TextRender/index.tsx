import { useContext, useMemo, useState } from "react";
import { TextRangeSelectionContext } from "../context/TextRangeSelectionContext";
import type { TextRangeSelectionContextType } from "../context/TextRangeSelectionContext";
import clsx from "clsx";
import { FixedSizeList as List } from "react-window";
import { createPortal } from "react-dom";

function Text() {
  const { text } = useContext<TextRangeSelectionContextType>(
    TextRangeSelectionContext
  );

  // 跟踪当前可视区域的 chunk 索引
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  // 分块文本
  const chunks = useMemo(() => {
    const chunkSize = 100; // 每块的字符数
    const result = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      result.push(text.slice(i, i + chunkSize));
    }
    return result;
  }, [text]);

  return (
    <>
      <List
        height={600} // 父容器高度
        itemCount={chunks.length} // 总块数
        itemSize={30} // 每行高度
        width="100%" // 宽度适应父容器
        onItemsRendered={({ visibleStartIndex, visibleStopIndex }) => {
          // 更新当前可视区域
          setVisibleRange({
            startIndex: visibleStartIndex,
            endIndex: visibleStopIndex,
          });
        }}
      >
        {({ index, style }) => (
          <div style={style}>
            <span>{chunks[index]}</span>
          </div>
        )}
      </List>
      {/* debugger */}
      {createPortal(
        <div className="absolute bottom-0 left-0 bg-gray-100 p-2 text-sm">
          <p>Visible Range:</p>
          <p>Start: {visibleRange.startIndex}</p>
          <p>End: {visibleRange.endIndex}</p>
        </div>,
        document.body
      )}
    </>
  );
}

export default Text;
