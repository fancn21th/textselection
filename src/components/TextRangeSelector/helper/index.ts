import { OriginTextRange } from "../context/NewTRSContext";

/**
 * 随机生成连续的文本范围，覆盖整个文本，每个范围的步长为文本长度的 1% 到 10%。
 * @param textLength - 文本的长度
 * @returns OriginTextRange[] - 覆盖整个文本的范围数组
 */
export function generateRandomRangesWithPercentage(
  textLength: number
): OriginTextRange[] {
  const ranges: OriginTextRange[] = [];
  let currentStart = 0;

  while (currentStart < textLength) {
    // 计算步长范围
    const minStep = Math.ceil(textLength * 0.01); // 最小步长：文本长度的 1%
    const maxStep = Math.ceil(textLength * 0.1); // 最大步长：文本长度的 10%

    // 随机生成步长
    const step = Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;

    // 计算当前范围的结束点
    const end = Math.min(currentStart + step, textLength); // 防止超出文本长度

    // 添加范围到结果中
    ranges.push({ s: currentStart, e: end });

    // 更新起始点
    currentStart = end;
  }

  return ranges;
}
