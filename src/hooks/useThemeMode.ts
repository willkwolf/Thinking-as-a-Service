import { useCallback, useEffect, useState } from 'react';

export type ThemeMode = 'day' | 'rest';

export function useThemeMode() {
  const [mode, setModeState] = useState<ThemeMode>('day');

  const setMode = useCallback((_next: ThemeMode, _persist = false) => {
    setModeState('day');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.timeMode = 'day';
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute('content', '#f7f6f2');
  }, []);

  return { mode, setMode };
}
