import { createContext, useContext, useState } from "react";

export const HeaderStyleContext = createContext();

export const useHeaderStyle = () => useContext(HeaderStyleContext);
