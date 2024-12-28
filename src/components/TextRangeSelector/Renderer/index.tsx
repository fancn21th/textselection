import { useContext, useMemo, useState } from "react";
import {
  NewTRSContext,
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";
import { FixedSizeList as List } from "react-window";
import { createPortal } from "react-dom";
import clsx from "clsx";
import DndLayer from "./DndLayer";
import BackgroundLayer from "./BackgroundLayer";

type ByKey = {
  [key: number]: SplittedByLineTextRange[];
};

function Text() {
  const {
    setNewLineRange,
    fullText: text,
    byLine,
    isDragging,
  } = useContext(NewTRSContext);

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

  // byLine 转换

  const byLineGroupedByKey = useMemo(() => {
    return byLine.reduce<ByKey>((acc, cur) => {
      if (!acc[cur.lineNumber]) {
        acc[cur.lineNumber] = [];
      }
      acc[cur.lineNumber].push(cur);
      return acc;
    }, {});
  }, [byLine]);

  console.log({ byLineGroupedByKey });

  // const onMouseEnter = (lineIndex: number) => {
  //   console.log("lineIndex onMouseEnter", lineIndex);
  // };

  // const onMouseLeave = (lineIndex: number) => {
  //   console.log("lineIndex onMouseLeave", lineIndex);
  // };

  return (
    <>
      <List
        height={600} // 父容器高度
        itemCount={chunks.length} // 总块数
        itemSize={40} // 每行高度
        width="100%" // 宽度适应父容器
        onItemsRendered={({
          visibleStartIndex,
          visibleStopIndex,
        }: {
          visibleStartIndex: number;
          visibleStopIndex: number;
        }) => {
          // 更新当前可视区域
          setNewLineRange(visibleStartIndex, visibleStopIndex);
          setVisibleRange({
            startIndex: visibleStartIndex,
            endIndex: visibleStopIndex,
          });
        }}
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => {
          const text = chunks[index];
          const parts = byLineGroupedByKey[index];

          return (
            <div
              style={style}
              // onMouseEnter={() => onMouseEnter(index)}
              // onMouseLeave={() => onMouseLeave(index)}
            >
              {/* text layer */}
              <div className="">
                <span className={clsx()}>{text}</span>
              </div>
              {/* background layer */}
              <div className={clsx("absolute left-0 top-0")}>
                {parts && (
                  <BackgroundLayer
                    parts={parts}
                    lineIndex={index}
                    lineText={text}
                  />
                )}
              </div>
              {/* dnd layer */}
              <div
                className={clsx(
                  "absolute left-0 top-0 ",
                  !isDragging && "pointer-events-none"
                )}
              >
                <DndLayer text={text} lineIndex={index} />
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
