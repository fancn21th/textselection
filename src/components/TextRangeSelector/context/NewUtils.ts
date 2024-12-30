import {
  GapFilledTextRange,
  IndexedOriginTextRange,
  OverlappedTextRange,
  SplittedByLineTextRange,
} from "./NewTRSContext";

type Marked = IndexedOriginTextRange & {
  tailOverlappedIndex: number | null;
  tailOverlappedPos: number | null;
  headOverlappedIndex: number | null;
  headOverlappedPos: number | null;
};

export const toOverLappedTextRanges = (ranges: IndexedOriginTextRange[]) => {
  // console.log({ ranges });

  // 计算重叠区域 打标记
  const marked = ranges.reduce<Marked[]>((acc, current, index) => {
    if (index > 0) {
      const last = acc[index - 1];
      if (current.s < last.e) {
        last.tailOverlappedPos = current.s;
        last.tailOverlappedIndex = current.index;
        (current as Marked).headOverlappedPos = last.e;
        (current as Marked).headOverlappedIndex = last.index;
      }
    }
    return [
      ...acc,
      {
        ...(current as Marked),
      },
    ];
  }, []);

  // console.log({ marked });

  // 重叠区域拆分
  const overlapped = marked.flatMap<OverlappedTextRange>((current) => {
    // 当前区间同时和前后区间重叠
    if (current.headOverlappedPos && current.tailOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.headOverlappedPos,
          index: -1,
          hoverIndex: [current.headOverlappedIndex, current.index],
          overlapped: [current.headOverlappedIndex],
          isOverlapped: true, // 重叠部分
        },
        {
          s: current.headOverlappedPos,
          e: current.tailOverlappedPos,
          index: current.index,
          hoverIndex: [current.index],
          overlapped: [
            current.headOverlappedIndex,
            current.tailOverlappedIndex,
          ],
          isOverlapped: false,
        },
        {
          s: current.tailOverlappedPos,
          e: current.e,
          index: -1,
          hoverIndex: [current.tailOverlappedIndex, current.index],
          overlapped: [current.tailOverlappedIndex],
          isOverlapped: true, // 重叠部分
        },
      ];
    }
    // 当前区间只和前区间重叠
    if (current.headOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.headOverlappedPos,
          index: -1,
          overlapped: [current.headOverlappedIndex],
          hoverIndex: [current.headOverlappedIndex, current.index],
          isOverlapped: true, // 重叠部分
        },
        {
          s: current.headOverlappedPos,
          e: current.e,
          index: current.index,
          hoverIndex: [current.index],
          overlapped: [current.headOverlappedIndex],
          isOverlapped: false,
        },
      ];
    }

    if (current.tailOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.tailOverlappedPos,
          index: current.index,
          hoverIndex: [current.index],
          overlapped: [current.tailOverlappedIndex],
          isOverlapped: false,
        },
        {
          s: current.tailOverlappedPos,
          e: current.e,
          index: -1,
          overlapped: [current.tailOverlappedIndex],
          hoverIndex: [current.tailOverlappedIndex, current.index],
          isOverlapped: true, // 重叠部分
        },
      ];
    }

    return [
      {
        s: current.s,
        e: current.e,
        index: current.index,
        hoverIndex: [current.index],
        overlapped: [],
        isOverlapped: false,
      },
    ];
  });

  // console.log({ overlapped });

  // 去掉重复
  const deduped = overlapped.reduce<OverlappedTextRange[]>((acc, current) => {
    const last = acc[acc.length - 1];
    if (last && last.s === current.s && last.e === current.e) {
      // 合并 overlapped 数组
      last.overlapped = [
        ...(last.overlapped || []),
        ...(current.overlapped || []),
      ].filter((v, i, self) => self.indexOf(v) === i); // 去重
    } else {
      acc.push(current);
    }
    return acc;
  }, []);

  // console.log({ deduped });

  return deduped;
};

export const fillGaps = (
  ranges: OverlappedTextRange[],
  length: number
): GapFilledTextRange[] => {
  const gapFilled = [];
  let lastEnd = 0;
  let gapIndex = 0;
  for (const { s, e, index, overlapped, isOverlapped, hoverIndex } of ranges) {
    if (s > lastEnd) {
      gapFilled.push({
        s: lastEnd,
        e: s,
        index: -1,
        hoverIndex: [gapIndex++],
        overlapped: [],
        isOverlapped: false,
        isGap: true,
      });
    }
    gapFilled.push({
      s,
      e,
      index,
      hoverIndex,
      overlapped,
      isGap: false,
      isOverlapped,
    });
    lastEnd = e;
  }
  if (lastEnd < length) {
    gapFilled.push({
      s: lastEnd,
      e: length,
      index: -1,
      hoverIndex: [gapIndex++],
      overlapped: [],
      isOverlapped: false,
      isGap: true,
    });
  }
  return gapFilled;
};

// split the ranges by line
export const splitRangesByLine = (
  ranges: GapFilledTextRange[],
  lineLength: number,
  startLine: number,
  endLine: number
): SplittedByLineTextRange[] => {
  const result: SplittedByLineTextRange[] = [];

  console.log({ ranges });

  for (const {
    s,
    e,
    index,
    hoverIndex,
    overlapped,
    isGap,
    isOverlapped,
  } of ranges) {
    const startLineIndex = Math.floor(s / lineLength);
    const endLineIndex = Math.floor(e / lineLength);

    for (let line = startLineIndex; line <= endLineIndex; line++) {
      const lineStart = line * lineLength;
      const lineEnd = (line + 1) * lineLength;

      // 计算子范围
      const subRangeStart = Math.max(s, lineStart);
      const subRangeEnd = Math.min(e, lineEnd);

      // 确保范围有效且在窗口范围内
      if (subRangeStart < subRangeEnd && line >= startLine && line < endLine) {
        result.push({
          s: subRangeStart,
          e: subRangeEnd,
          index,
          hoverIndex,
          overlapped,
          isGap,
          lineNumber: line,
          isOverlapped,
        });
      }
    }
  }

  return result;
};

export function splitTextByIndices(text: string, splitter: number[]): string[] {
  // 确保索引是从小到大排序的
  // const sortedSplitter = [...splitter].sort((a, b) => a - b);

  const result = [];
  let start = 0;

  // 遍历索引数组
  for (const index of splitter) {
    result.push(text.slice(start, index + 1)); // 将当前片段加入结果
    start = index + 1; // 更新起始位置
  }

  // 添加最后的片段
  result.push(text.slice(start));

  return result;
}

export const splitByChunkSize = (text: string, chunkSize: number): string[] => {
  return Array.from(
    { length: Math.ceil(text.length / chunkSize) },
    (_, index) => {
      return text.slice(index * chunkSize, (index + 1) * chunkSize);
    }
  );
};
