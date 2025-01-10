import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { RangeContext, SplittedByLineTextRange } from "../context/RangeContext";

// part 是 行内的一个区域 是背景渲染的最小单位
// 一个 range 可能会被分割成多个 part
const Part = ({
  partText,
  part,
}: {
  partText: string;
  part: SplittedByLineTextRange;
}) => {
  const { activatedObject, setActivatedRange, isDragging } =
    useContext(RangeContext);
  const [isActivated, setIsActivated] = useState(false);

  const overlapped = part.isOverlapped; // 重叠部分
  const isOdd = part.index % 2 === 1; // 奇数区域
  const isEven = part.index % 2 === 0; // 偶数区域
  const isGap = part.isGap; // 空隙部分

  useEffect(() => {
    // 非空隙部分，且 hoverIndex 包含当前区域
    if (
      activatedObject &&
      !activatedObject.isGap &&
      !isGap &&
      part.hoverIndex.includes(activatedObject.index)
    ) {
      setIsActivated(true);
      return;
    }

    // 空隙部分，且 hoverIndex 包含当前区域
    if (
      activatedObject &&
      activatedObject.isGap &&
      isGap &&
      part.gapIndex === activatedObject.gapIndex
    ) {
      setIsActivated(true);
      return;
    }

    setIsActivated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedObject]);

  // 激活当前区域
  const highlight = (part: SplittedByLineTextRange) => {
    if (isDragging || part.isOverlapped) {
      // do nothing
      return;
    }

    if (activatedObject && part.overallIndex === activatedObject.overallIndex) {
      // 取消激活
      setActivatedRange(null);
    } else {
      // 激活
      setActivatedRange(part);
    }
  };

  return (
    <span
      className={clsx(
        // "text-transparent",
        "cursor-pointer",
        isActivated && "bg-yellow-300", // 激活状态
        !isActivated && !overlapped && isEven && "bg-red-300", //  偶数区域
        !isActivated && !overlapped && isOdd && "bg-green-300", //  奇数区域
        !isActivated && overlapped && "bg-gray-300 cursor-default", //  重叠部分
        !isActivated && isGap && "bg-transparent" //  空隙部分
      )}
      onClick={() => highlight(part)}
    >
      {partText}
    </span>
  );
};

const BackgroundLayer = ({ parts }: { parts: SplittedByLineTextRange[] }) => {
  return (
    <>
      {parts.map((part, _index) => {
        return <Part key={_index} partText={part.text} part={part} />;
      })}
    </>
  );
};

export default BackgroundLayer;
