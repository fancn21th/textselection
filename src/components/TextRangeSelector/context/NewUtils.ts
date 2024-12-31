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
  chunks: string[],
  startLine: number,
  endLine: number
): SplittedByLineTextRange[] => {
  let pos = 0;

  const chunksWithRange: {
    start: number;
    end: number;
    text: string;
    index: number;
  }[] = [];

  chunks.forEach((chunk, index) => {
    const start = pos;
    pos += chunk.length;
    if (index >= startLine && index < endLine) {
      chunksWithRange.push({ start, end: pos, text: chunk, index });
    }
  });

  const calculateSegmentIntersection = (
    range: GapFilledTextRange,
    chunk: (typeof chunksWithRange)[number]
  ) => {
    const { s, e } = range;
    const { start, end } = chunk;

    if (e <= start || s >= end) return null;
    return { segmentStart: Math.max(s, start), segmentEnd: Math.min(e, end) };
  };

  const result: SplittedByLineTextRange[] = ranges
    .filter(
      (range) =>
        range.s < chunksWithRange[chunksWithRange.length - 1].end &&
        range.e > chunksWithRange[0].start
    )
    .flatMap((range) =>
      chunksWithRange.map((chunk) => {
        const intersection = calculateSegmentIntersection(range, chunk);
        if (!intersection) return null;

        const { segmentStart, segmentEnd } = intersection;
        return {
          s: segmentStart,
          e: segmentEnd,
          index: range.index,
          hoverIndex: range.hoverIndex,
          overlapped: range.overlapped,
          isGap: range.isGap,
          lineNumber: chunk.index,
          isOverlapped: range.isOverlapped,
          text: chunk.text.slice(
            segmentStart - chunk.start,
            segmentEnd - chunk.start
          ),
        };
      })
    )
    .filter((item): item is SplittedByLineTextRange => item !== null);

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
