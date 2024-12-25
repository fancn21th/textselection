import { ResolvedCursor } from "./TextRangeSelectionContext";

export function splitRangesByLine(
  ranges: ResolvedCursor[],
  lineLength: number
) {
  const result = [];

  for (const range of ranges) {
    const { s: start, e: end } = range;

    // 起始行和结束行
    let currentLine = Math.floor(start / lineLength) + 1;
    let currentStart = start;

    // 遍历范围，按行切分
    while (currentStart < end) {
      const lineStart = (currentLine - 1) * lineLength;
      const lineEnd = currentLine * lineLength;

      // 切分当前行的范围
      result.push({
        ...range,
        line: currentLine,
        s: Math.max(currentStart, lineStart),
        e: Math.min(end, lineEnd),
      });

      // 移动到下一行
      currentLine++;
      currentStart = Math.min(end, lineEnd);
    }
  }

  return result;
}

export function fillGaps(inputRanges: ResolvedCursor[], lineLength: number) {
  const result = [];
  const rangesByLine: { [key: number]: ResolvedCursor[] } = {};

  // 按行组织数据
  for (const range of inputRanges) {
    const { line } = range;
    if (!rangesByLine[line!]) {
      rangesByLine[line!] = [];
    }
    rangesByLine[line!].push({ ...range });
  }

  // 遍历每一行，补全空隙
  for (const [line, ranges] of Object.entries(rangesByLine)) {
    const lineStart = (line - 1) * lineLength;
    const lineEnd = line * lineLength;

    // 按起始位置排序
    ranges.sort((a: { s: number }, b: { s: number }) => a.s - b.s);

    let currentStart = lineStart;

    for (const range of ranges) {
      const { s, e } = range;

      // 补全空隙
      if (currentStart < s) {
        result.push({
          line: Number(line),
          s: currentStart,
          e: s,
          isFill: true,
        });
      }

      // 添加当前区间
      result.push({
        ...range,
        line: Number(line),
        s,
        e,
      });

      currentStart = e; // 更新当前起点
    }

    // 补全最后的空隙
    if (currentStart < lineEnd) {
      result.push({
        line: Number(line),
        s: currentStart,
        e: lineEnd,
        isFill: true,
      });
    }
  }

  return result;
}
