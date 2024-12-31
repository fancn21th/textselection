import { useContext, useMemo } from "react";
import {
  NewTRSContext,
  SplittedByLineTextRange,
} from "../context/NewTRSContext";
import { FixedSizeList as List } from "react-window";
import clsx from "clsx";
import DndLayer from "./DndLayer";
import BackgroundLayer from "./BackgroundLayer";

type ByKey = {
  [key: number]: SplittedByLineTextRange[];
};

function Text() {
  const { setNewLineRange, chunks, byLine, isDragging, setVisibleRange } =
    useContext(NewTRSContext);

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
        const startPos = parts && parts[0].s;

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
              {parts && <BackgroundLayer parts={parts} />}
            </div>
            {/* dnd layer */}
            <div
              className={clsx(
                "absolute left-0 top-0 ",
                !isDragging && "pointer-events-none"
              )}
            >
              <DndLayer text={text} startPos={startPos} />
            </div>
          </div>
        );
      }}
    </List>
  );
}

export default Text;
