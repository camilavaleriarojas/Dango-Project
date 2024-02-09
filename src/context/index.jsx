import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [titleSize, setTitleSize] = useState("text-base");
  const [amount, setAmount] = useState(0);

  const stateContext = { titleSize, setTitleSize, amount, setAmount };
  return <Context.Provider value={stateContext}>{children}</Context.Provider>;
};
