import { useEffect } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import { STORAGE_KEYS, THEME } from '@utils/constants';

type Theme = typeof THEME.LIGHT | typeof THEME.DARK;

/**
 * Custom hook to manage theme (light/dark mode)
 * @returns [theme, toggleTheme] tuple
 */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useLocalStorage<Theme>(
    STORAGE_KEYS.THEME,
    THEME.LIGHT
  );

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEME.LIGHT, THEME.DARK);
    root.classList.add(theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  };

  return [theme, toggleTheme];
}
