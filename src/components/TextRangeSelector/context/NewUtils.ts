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

  const overlapped = marked.flatMap<OverlappedTextRange>((current) => {
    // 当前区间同时和前后区间重叠
    if (current.headOverlappedPos && current.tailOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.headOverlappedPos,
          index: current.index,
          overlapped: [current.headOverlappedIndex],
        },
        {
          s: current.headOverlappedPos,
          e: current.tailOverlappedPos,
          index: current.index,
          overlapped: null,
        },
        {
          s: current.tailOverlappedPos,
          e: current.e,
          index: current.index,
          overlapped: [current.tailOverlappedIndex],
        },
      ];
    }
    // 当前区间只和前区间重叠
    if (current.headOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.headOverlappedPos,
          index: current.index,
          overlapped: [current.headOverlappedIndex],
        },
        {
          s: current.headOverlappedPos,
          e: current.e,
          index: current.index,
          overlapped: null,
        },
      ];
    }

    if (current.tailOverlappedPos) {
      return [
        {
          s: current.s,
          e: current.tailOverlappedPos,
          index: current.index,
          overlapped: null,
        },
        {
          s: current.tailOverlappedPos,
          e: current.e,
          index: current.index,
          overlapped: [current.tailOverlappedIndex],
        },
      ];
    }

    return [
      {
        s: current.s,
        e: current.e,
        index: current.index,
        overlapped: null,
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
  for (const { s, e, index, overlapped } of ranges) {
    if (s > lastEnd) {
      gapFilled.push({
        s: lastEnd,
        e: s,
        index: -1,
        overlapped: null,
        isGap: true,
      });
    }
    gapFilled.push({ s, e, index, overlapped, isGap: false });
    lastEnd = e;
  }
  if (lastEnd < length) {
    gapFilled.push({
      s: lastEnd,
      e: length,
      index: -1,
      overlapped: null,
      isGap: true,
    });
  }
  return gapFilled;
};

export const splitRangesByLine = (
  ranges: GapFilledTextRange[],
  lineLength: number,
  startLine: number,
  endLine: number
): SplittedByLineTextRange[] => {
  const result: SplittedByLineTextRange[] = [];

  for (const { s, e, index, overlapped, isGap } of ranges) {
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
          overlapped,
          isGap,
          lineNumber: line,
        });
      }
    }
  }

  return result;
};
