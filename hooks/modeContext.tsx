"use client"

import { ModeContextProps } from "@/types/mode";
import React, { createContext, FC, ReactNode, useState } from "react";

export const ModeContext = createContext<ModeContextProps | null>(null);

const ModeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string>("dark");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
