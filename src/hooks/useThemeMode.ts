import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'kumu-visual-mode';
const REST_START = 19;
const REST_END = 6;

export type ThemeMode = 'day' | 'rest';

function getAutomaticMode(): ThemeMode {
  const hour = new Date().getHours();
  return hour >= REST_START || hour < REST_END ? 'rest' : 'day';
}

export function useThemeMode() {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    return saved === 'rest' || saved === 'day' ? saved : getAutomaticMode();
  });

  const setMode = useCallback((next: ThemeMode, persist = false) => {
    setModeState(next);
    document.documentElement.dataset.timeMode = next;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute('content', next === 'rest' ? '#080d12' : '#f4f7fb');
    if (persist) localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.timeMode = mode;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute('content', mode === 'rest' ? '#080d12' : '#f4f7fb');
  }, [mode]);

  return { mode, setMode };
}
