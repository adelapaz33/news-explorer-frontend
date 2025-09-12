import { createContext, useContext } from "react";

export const HeaderStyleContext = createContext();

export const useHeaderStyle = () => useContext(HeaderStyleContext);
