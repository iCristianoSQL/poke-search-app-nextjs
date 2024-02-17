"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type TextContextData = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const TextContext = createContext<TextContextData>({
  text: "",
  setText: () => {},
});

export const TextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useText must be used within a TextProvider");
  }
  return context;
};
