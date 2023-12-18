import { createContext, useState } from "react";

const LightModeContext = createContext();

const LightModeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  return <LightModeContext.Provider value={{ isLight, setIsLight }}>
    {children}</LightModeContext.Provider>;
};

export const LightMode = LightModeContext;
export default LightModeContextProvider;
