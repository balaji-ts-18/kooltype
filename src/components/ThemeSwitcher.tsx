"use client";

import { FC } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: FC = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="absolute top-4 right-4 bg-sub-alt p-2 rounded-lg shadow-lg">
      <h3 className="text-text text-sm font-bold mb-2">Theme</h3>
      <div className="flex flex-col space-y-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              theme.name === t.name
                ? 'bg-main text-background'
                : 'bg-sub text-text hover:bg-main hover:text-background'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;