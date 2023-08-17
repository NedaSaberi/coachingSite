import React, { createContext, ReactNode, useState } from "react";

interface Theme {
  color?: string;
  bgcolor?: string;
}

interface ThemeContextType {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  let [color, setColor] = useState('rgba(0, 0, 0, 0.1)');

  const theme: Theme = { color: color };
  const themeContextValue: ThemeContextType = { theme };

  return (
    <ThemeContext.Provider value= {themeContextValue} >{children}</ThemeContext.Provider>
  );
}
