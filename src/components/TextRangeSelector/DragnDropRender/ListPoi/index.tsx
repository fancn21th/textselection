import { memo, useEffect, useMemo, useRef, useState, Fragment } from "react";
import Char from "../Char";

interface VirtualizedCharsProps {
  text: string;
  pageSize?: number;
  onDrop: (index: number) => void;
  containerSelector?: string; // 可选的滚动容器选择器
}

const VirtualizedChars: React.FC<VirtualizedCharsProps> = ({ text, pageSize = 3000, onDrop, containerSelector }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(text.length / pageSize);
  const startIndex = 0;
  const endIndex = Math.min(currentPage * pageSize, text.length);

  // 将字符分组
  const charGroups = useMemo(() => {
    const groups: string[][] = [];
    for (let i = startIndex; i < endIndex; i += pageSize) {
      groups.push(Array.from(text.substring(i, Math.min(i + pageSize, endIndex))));
    }
    return groups;
  }, [text, startIndex, endIndex, pageSize]);

  // 简化加载监听逻辑
  useEffect(() => {
    const loadingElement = lastElementRef.current;
    if (!loadingElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && currentPage < totalPages) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        root: containerSelector ? document.querySelector(containerSelector) : null,
        rootMargin: "50px",
        threshold: 0,
      }
    );

    observer.observe(loadingElement);

    return () => observer.disconnect();
  }, [currentPage, totalPages, containerSelector]);

  return (
    <div style={{ height: "100%", minHeight: "100px" }}>
      {charGroups.map((group, groupIndex) => (
        // <div
        //   key={groupIndex}
        //   style={{
        //     minHeight: "20px",
        //     contentVisibility: "auto",
        //   }}
        // >
        //   {group.map((char, charIndex) => {
        //     const absoluteIndex = groupIndex * pageSize + charIndex;
        //     return (
        //       <Char key={absoluteIndex} index={absoluteIndex} onDrop={onDrop}>
        //         {char}
        //       </Char>
        //     );
        //   })}
        // </div>
        <Fragment key={groupIndex}>
          {group.map((char, charIndex) => {
            const absoluteIndex = groupIndex * pageSize + charIndex;
            return (
              <Char key={absoluteIndex} index={absoluteIndex} onDrop={onDrop}>
                {char}
              </Char>
            );
          })}
        </Fragment>
      ))}

      {currentPage < totalPages && (
        <div
          ref={lastElementRef}
          style={{
            height: "30px",
            padding: "5px",
            textAlign: "center",
          }}
        >
          加载中...
        </div>
      )}
    </div>
  );
};

export default memo(VirtualizedChars);
