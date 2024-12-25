import { useContext, useMemo, useState } from "react";
import {
  TextRangeSelectionContext,
  chunkSize,
} from "../context/TextRangeSelectionContext";
import type { TextRangeSelectionContextType } from "../context/TextRangeSelectionContext";
import { FixedSizeList as List } from "react-window";
import { createPortal } from "react-dom";
import clsx from "clsx";
import DndLayer from "./DndLayer";
import BackgroundLayer from "./BackgroundLayer";

function Text() {
  const { text, setLineRange, visibleLinesPart, sortedCursorPositions } =
    useContext<TextRangeSelectionContextType>(TextRangeSelectionContext);

  // 跟踪当前可视区域的 chunk 索引
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  // 分块文本
  const chunks = useMemo(() => {
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
        onItemsRendered={({
          visibleStartIndex,
          visibleStopIndex,
        }: {
          visibleStartIndex: number;
          visibleStopIndex: number;
        }) => {
          // 更新当前可视区域
          setLineRange(visibleStartIndex, visibleStopIndex);
          setVisibleRange({
            startIndex: visibleStartIndex,
            endIndex: visibleStopIndex,
          });
        }}
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => {
          const text = chunks[index];
          const parts = visibleLinesPart[index];
          const cursors = sortedCursorPositions[index];
          return (
            <div style={style}>
              {/* text layer */}
              <div className="">
                <span className={clsx()}>{text}</span>
              </div>
              {/* background layer */}
              <div className={clsx("absolute left-0 top-0")}>
                {parts && (
                  <BackgroundLayer
                    parts={parts}
                    index={index}
                    text={text}
                    cursors={cursors}
                  />
                )}
              </div>
              {/* dnd layer */}
              <div className={clsx("absolute left-0 top-0")}>
                <DndLayer text={text} />
              </div>
            </div>
          );
        }}
      </List>
      {/* debugger */}
      {createPortal(
        <div className="absolute right-0 bottom-0 bg-gray-100 p-2 text-sm">
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