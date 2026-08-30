import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';

export const MODES = ['light', 'dark'];

const STORAGE_KEY = 'fl-theme';

const readStoredMode = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return MODES.includes(stored) ? stored : null;
  } catch {
    return null;
  }
};

const systemPrefersDark = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

/** An explicit choice wins; otherwise follow the operating system. */
const detectMode = () => readStoredMode() || (systemPrefersDark() ? 'dark' : 'light');

const ThemeModeContext = createContext({ mode: 'light', setMode: () => {}, toggleMode: () => {} });

export const ThemeModeProvider = ({ children }) => {
  const [mode, setModeState] = useState(detectMode);

  const setMode = useCallback((next) => {
    if (!MODES.includes(next)) return;
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting the choice is a nicety, not a requirement.
    }
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // See above.
      }
      return next;
    });
  }, []);

  /* Follow the OS while the visitor has never chosen for themselves. */
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event) => {
      if (readStoredMode()) return;
      setModeState(event.matches ? 'dark' : 'light');
    };

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const theme = themes[mode] || themes.light;

  /* Paint the browser chrome (iOS status bar, Android address bar) to match,
     and expose the mode for anything styled outside styled-components. */
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme.colors.bgBase);
  }, [mode, theme]);

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
