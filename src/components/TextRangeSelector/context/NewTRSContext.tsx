import { createContext, ReactNode, useState } from "react";

// Types for context value
export type NewTRSContextType = {
  charCount: number;
  setCharCount: (count: number) => void;
  setFullText: (text: string) => void;
};

// 创建 Context
// TODO: context warning
export const NewTRSContext = createContext<NewTRSContextType>(
  {} as NewTRSContextType
);

// 提供 Context 的 Provider
export const NewTRSProvider = ({ children }: { children: ReactNode }) => {
  const [charCount, setCharCount] = useState(0);
  const [fullText, _setFullText] = useState("");

  console.log({ charCount });

  // wrapper for setFullText
  const setFullText = (text: string) => {
    _setFullText(text);
    setCharCount(text.length);
  };

  return (
    <NewTRSContext.Provider value={{ charCount, setCharCount, setFullText }}>
      {children}
    </NewTRSContext.Provider>
  );
};
