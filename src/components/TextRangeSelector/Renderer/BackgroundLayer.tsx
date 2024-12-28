import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {
  CursorPosition,
  NewTRSContext,
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";
import { CursorGhost } from "./Cursor";

// part 是 行内的一个区域 是背景渲染的最小单位
// 一个 range 可能会被分割成多个 part
const Part = ({
  partText,
  part,
}: {
  partText: string;
  part: SplittedByLineTextRange;
}) => {
  const { activatedObject, setActivatedRange, cursorPositions } =
    useContext(NewTRSContext);
  const [isActivated, setIsActivated] = useState(false);
  const [headCursor, setHeadCursor] = useState<CursorPosition | null>(null);
  const [tailCursor, setTailCursor] = useState<CursorPosition | null>(null);

  const overlapped = part.isOverlapped; // 重叠部分
  const isOdd = part.index % 2 === 1; // 奇数区域
  const isEven = part.index % 2 === 0; // 偶数区域
  const isGap = part.isGap; // 空隙部分

  useEffect(() => {
    // 非空隙部分，且 hoverIndex 包含当前区域
    if (
      !activatedObject.isGap &&
      !isGap &&
      part.hoverIndex.includes(activatedObject.activatedRangeIndex)
    ) {
      setIsActivated(true);
      return;
    }

    // 空隙部分，且 hoverIndex 包含当前区域
    if (
      activatedObject.isGap &&
      isGap &&
      part.hoverIndex.includes(activatedObject.activatedRangeIndex)
    ) {
      setIsActivated(true);
      return;
    }

    setIsActivated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedObject]);

  useEffect(() => {
    if (isActivated) {
      // 获取触发激活的区域， 如果是重叠 则有两种可能 头部是重叠部分 或者 尾部是重叠部分
      const { activatedRangeIndex } = activatedObject;

      // part 是 重叠部分
      if (part.index === -1) {
        // activatedRangeIndex 比 part.hoverIndex 的最大值小 说明是头部
        // 重叠部分为头部 则 headCursor 为 s
        if (activatedRangeIndex < Math.max(...part.hoverIndex)) {
          const tail = cursorPositions.find(
            (cursor) => cursor.pos === part.e && cursor.type === "e"
          );
          if (tail) {
            setTailCursor(tail);
          }
        } else {
          const head = cursorPositions.find(
            (cursor) => cursor.pos === part.s && cursor.type === "s"
          );
          if (head) {
            setHeadCursor(head);
          }
        }
      } else {
        // part 是 非重叠部分

        // part 和其他 part 有重叠
        if (part.overlapped && part.overlapped.length > 0) {
          const head = cursorPositions.find(
            (cursor) => cursor.pos === part.s && cursor.type === "s"
          );
          if (head) {
            setHeadCursor(head);
          }

          const tail = cursorPositions.find(
            (cursor) => cursor.pos === part.e && cursor.type === "e"
          );
          if (tail) {
            setTailCursor(tail);
          }
        } else {
          // part 和其他 part 没有重叠
          const head = cursorPositions.find(
            (cursor) => cursor.pos === part.s && cursor.type === "s"
          );
          if (head) {
            setHeadCursor(head);
          }

          const tail = cursorPositions.find(
            (cursor) => cursor.pos === part.e && cursor.type === "e"
          );
          if (tail) {
            setTailCursor(tail);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActivated]);

  const highlight = (index: number[], isGap: boolean, overlapped: boolean) => {
    // TODO: 点击重叠的区域靠后的区域被激活
    const maxIndex = Math.max(...index);
    setActivatedRange(maxIndex, isGap, overlapped);
  };

  return (
    <>
      {headCursor && <CursorGhost pos={headCursor} />}
      <span
        className={clsx(
          // "text-transparent",
          "cursor-pointer",
          isActivated && "bg-yellow-300", // 激活状态
          !isActivated && !overlapped && isEven && "bg-red-300", //  偶数区域
          !isActivated && !overlapped && isOdd && "bg-green-300", //  奇数区域
          !isActivated && overlapped && "bg-gray-300", //  重叠部分
          !isActivated && isGap && "bg-transparent" //  空隙部分
        )}
        onClick={() => highlight(part.hoverIndex, isGap, overlapped)}
      >
        {partText}
      </span>
      {tailCursor && <CursorGhost pos={tailCursor} />}
    </>
  );
};

const BackgroundLayer = ({
  parts,
  lineIndex,
  lineText,
}: {
  parts: SplittedByLineTextRange[];
  lineIndex: number;
  lineText: string;
}) => {
  return (
    <>
      {parts.map((part, _index) => {
        const _start = part.s - lineIndex * chunkSize;
        const _end = part.e - lineIndex * chunkSize;
        const _partText = lineText.slice(_start, _end);

        return <Part key={_index} partText={_partText} part={part} />;
      })}
    </>
  );
};

export default BackgroundLayer;
