import { useContext, useMemo } from "react";
import { RangeContext, SplittedByLineTextRange } from "../context/RangeContext";
import { FixedSizeList as List } from "react-window";
import clsx from "clsx";
import DndDragLayer from "./DndDragLayer";
import DndDropLayer from "./DndDropLayer";
import BackgroundLayer from "./BackgroundLayer";
import DndDragHandlerLayer from "./DndDragHandlerLayer";

type ByKey = {
  [key: number]: SplittedByLineTextRange[];
};

function Text() {
  const { setNewLineRange, chunks, byLine, setVisibleRange, activatedObject } =
    useContext(RangeContext);

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
        onScroll={() => {}}
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
            parts.some((part) => {
              return (
                part.index === activatedObject.index ||
                part.hoverIndex.includes(activatedObject.index)
              );
            });

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
                className={clsx("absolute left-0 top-0", "pointer-events-none")}
              >
                {showDragLayer && <DndDragLayer parts={parts} />}
              </div>
              {/* dnd drop layer */}
              <div className={clsx("absolute left-0 top-0")}>
                <DndDropLayer text={text} startPos={startPos} />
              </div>
            </div>
          );
        }}
      </List>
      {/* DndDragHandlerLayer 并不是针对行 而是针对整个可视区域 */}
      <DndDragHandlerLayer />
    </>
  );
}

export default Text;
