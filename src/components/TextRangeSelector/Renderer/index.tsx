import { useContext, useMemo } from "react";
import {
  NewTRSContext,
  SplittedByLineTextRange,
} from "../context/NewTRSContext";
import { FixedSizeList as List } from "react-window";
import clsx from "clsx";
import DndDragLayer from "./DndDragLayer";
import DndDropLayer from "./DndDropLayer";
import BackgroundLayer from "./BackgroundLayer";

type ByKey = {
  [key: number]: SplittedByLineTextRange[];
};

function Text() {
  const {
    setNewLineRange,
    chunks,
    byLine,
    isDragging,
    setVisibleRange,
    setIsDropping,
    activatedObject,
  } = useContext(NewTRSContext);

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
      onScroll={() => {
        // TODO: 解决 dragging 状态无法正确取消的问题
        if (isDragging) setIsDropping();
      }}
    >
      {({ index, style }: { index: number; style: React.CSSProperties }) => {
        const text = chunks[index];
        const parts = byLineGroupedByKey[index];
        const startPos = parts && parts[0].s;
        // gap 区域没有 拖动功能
        const showDragLayer =
          activatedObject !== null &&
          parts &&
          parts.length > 0 &&
          parts.some((part) => part.index === activatedObject.index);

        return (
          <div style={style}>
            {/* text layer */}
            <div className="">
              <span className={clsx()}>{text}</span>
            </div>
            {/* background layer */}
            <div className={clsx("absolute left-0 top-0")}>
              {parts && <BackgroundLayer parts={parts} />}
            </div>
            {/* dnd drag layer */}
            <div
              className={clsx(
                "absolute left-0 top-0",
                !showDragLayer && "pointer-events-none"
              )}
            >
              {showDragLayer && <DndDragLayer text={text} />}
            </div>
            {/* dnd drop layer */}
            <div
              className={clsx(
                "absolute left-0 top-0",
                !isDragging && "pointer-events-none"
              )}
            >
              <DndDropLayer text={text} startPos={startPos} />
            </div>
          </div>
        );
      }}
    </List>
  );
}

export default Text;
