import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import {
  NewTRSContext,
  SplittedByLineTextRange,
  LineCharCount as chunkSize,
} from "../context/NewTRSContext";

const Part = ({
  text,
  part,
}: {
  text: string;
  part: SplittedByLineTextRange;
}) => {
  const { activatedObject, setActivatedRange } = useContext(NewTRSContext);
  const [isActivated, setIsActivated] = useState(false);

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
  }, [activatedObject]);

  const highlight = (index: number[], isGap: boolean, overlapped: boolean) => {
    setActivatedRange(index, isGap, overlapped);
  };

  return (
    <span
      className={clsx(
        // "text-transparent",
        "cursor-pointer",
        isActivated && "bg-yellow-300",
        !isActivated && !overlapped && isEven && "bg-red-300", //  偶数区域
        !isActivated && !overlapped && isOdd && "bg-green-300", //  奇数区域
        !isActivated && overlapped && "bg-gray-300", //  重叠部分
        !isActivated && isGap && "bg-transparent"
      )}
      onClick={() => highlight(part.hoverIndex, isGap, overlapped)}
    >
      {text}
    </span>
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

        return (
          <Fragment key={_index}>
            <Part text={_partText} part={part} />
          </Fragment>
        );
      })}
    </>
  );
};

export default BackgroundLayer;
