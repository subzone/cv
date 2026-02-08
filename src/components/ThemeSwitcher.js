import React, { useState, useRef, useEffect } from 'react';
import { useTheme, themes } from '../ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themeLabels = {
    dark: '🌙 Dark',
    ocean: '🌊 Ocean',
    light: '☀️ Light'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button 
        className="theme-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch theme"
      >
        {themeLabels[theme]}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="theme-dropdown">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              className={`theme-option ${theme === value ? 'active' : ''}`}
              onClick={() => {
                setTheme(value);
                setIsOpen(false);
              }}
            >
              {themeLabels[value]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
