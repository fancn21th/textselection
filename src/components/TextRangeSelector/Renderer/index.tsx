import { useContext, useMemo } from "react";
import { RangeContext, SplittedByLineTextRange } from "../context/RangeContext";
import { VariableSizeList as List } from "react-window";
import clsx from "clsx";
import DndDragLayer from "./DndDragLayer";
import DndDropLayer from "./DndDropLayer";
import BackgroundLayer from "./BackgroundLayer";

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

  // 缓存每行的高度
  const lineHeightCache = new Map<number, number>();

  // 动态计算行高
  const getLineHeight = (line: string, index: number) => {
    if (lineHeightCache.has(index)) {
      return lineHeightCache.get(index); // 返回缓存的高度
    }

    console.log("计算行高", index);

    const tempElement = document.createElement("div");
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.whiteSpace = "pre-wrap";
    tempElement.style.width = "100%";
    tempElement.innerText = line;
    document.body.appendChild(tempElement);
    const height = tempElement.getBoundingClientRect().height;
    document.body.removeChild(tempElement);

    lineHeightCache.set(index, height); // 缓存高度
    return height;
  };

  // 动态获取每行的高度
  const getItemSize = (index: number) => {
    const line = chunks[index];
    return getLineHeight(line, index) || 20;
  };

  console.log({ byLineGroupedByKey });

  return (
    <List
      height={600} // 父容器高度
      itemSize={getItemSize} // 每行高度
      itemCount={chunks.length} // 总块数
      width="100%" // 宽度适应父容器
      estimatedItemSize={20} // 预估行高，用于优化初始渲染
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
  );
}

export default Text;
