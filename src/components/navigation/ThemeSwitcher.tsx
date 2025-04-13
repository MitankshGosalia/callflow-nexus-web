
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setTheme, isDark } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="sm"
      className="px-2"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">
        {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
    </Button>
  );
}
