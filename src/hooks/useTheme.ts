import { useState, useEffect, useCallback } from 'react';

interface UseThemeResult {
  isDark: boolean;
  toggle: () => void;
}

export function useTheme(): UseThemeResult {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false; 
    }
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = useCallback((): void => {
    setIsDark(prev => !prev);
  }, []);

  return { isDark, toggle };
}
