"use client";

import React from 'react';
import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { themes, Theme } from '../constants/themes';

// --- Type Definitions ---

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

interface ThemeProviderProps {
  children: ReactNode;
}

// --- Preset Themes ---


// --- Context and Provider ---
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    const root = window.document.documentElement;
    Object.entries(theme.colors).forEach(([name, color]) => {
      root.style.setProperty(`--color-${name}`, color);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};