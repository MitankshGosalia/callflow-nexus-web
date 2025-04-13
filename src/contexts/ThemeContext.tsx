
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as Theme) || 'system';
  });
  
  const [isDark, setIsDark] = useState(false);
  
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = () => {
      const resolvedTheme = theme === 'system' 
        ? (mediaQuery.matches ? 'dark' : 'light') 
        : theme;
      
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
      setIsDark(resolvedTheme === 'dark');
    };
    
    updateTheme();
    
    const listener = () => updateTheme();
    mediaQuery.addEventListener('change', listener);
    
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
