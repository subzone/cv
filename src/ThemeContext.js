import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: 'dark',
  ocean: 'ocean',
  light: 'light'
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('cv-theme');
    return saved || themes.dark;
  });

  useEffect(() => {
    localStorage.setItem('cv-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
