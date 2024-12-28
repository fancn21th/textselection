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
  text,
  part,
}: {
  text: string;
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
      part.hoverIndex.includes(activatedObject.rangeIndex[0])
    ) {
      setIsActivated(true);
      return;
    }

    // 空隙部分，且 hoverIndex 包含当前区域
    if (
      activatedObject.isGap &&
      isGap &&
      part.hoverIndex.includes(activatedObject.rangeIndex[0])
    ) {
      setIsActivated(true);
      return;
    }

    setIsActivated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedObject]);

  useEffect(() => {
    if (isActivated) {
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
  }, [isActivated]);

  const highlight = (index: number[], isGap: boolean, overlapped: boolean) => {
    setActivatedRange(index, isGap, overlapped);
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
        {text}
      </span>
      {tailCursor && <CursorGhost pos={tailCursor} />}
    </>
  );
};

const BackgroundLayer = ({
  parts,
  lineIndex,
  text,
}: {
  parts: SplittedByLineTextRange[];
  lineIndex: number;
  text: string;
}) => {
  return (
    <>
      {parts.map((part, _index) => {
        const _start = part.s - lineIndex * chunkSize;
        const _end = part.e - lineIndex * chunkSize;
        const _partText = text.slice(_start, _end);

        return <Part key={_index} text={_partText} part={part} />;
      })}
    </>
  );
};

export default BackgroundLayer;
