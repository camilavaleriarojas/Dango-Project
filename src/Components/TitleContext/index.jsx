import { createContext, useState } from "react";

export const TitleSizeContext = createContext();

export const TitleSizeProvider = ({ children }) => {
  const [titleSize, setTitleSize] = useState("text-base");

  const hola = { titleSize, setTitleSize };
  return (
    <TitleSizeContext.Provider value={hola}>
      {children}
    </TitleSizeContext.Provider>
  );
};
