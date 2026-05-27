import { useEffect } from 'react';
import type { ThemeMode } from './useThemeMode';

// Symmetrical color sets for smooth interpolation
const LIGHT_START = {
  '--bg': '#f4f7fb',
  '--bg-strong': '#e7edf5',
  '--panel': 'rgba(255, 255, 255, 0.92)',
  '--panel-solid': '#ffffff',
  '--ink': '#071421',
  '--muted': '#425466',
  '--line': '#b8c3cf',
  '--line-strong': '#6d7d8f',
  '--blueprint': '#153a5b',
  '--grid-line': 'rgba(21, 58, 91, 0.1)',
};

const LIGHT_END = {
  '--bg': '#030914',
  '--bg-strong': '#061224',
  '--panel': 'rgba(10, 22, 38, 0.94)',
  '--panel-solid': '#0b1a2b',
  '--ink': '#e4effa',
  '--muted': '#b0c3d7',
  '--line': '#2d3d4e',
  '--line-strong': '#53687e',
  '--blueprint': '#8bbce6',
  '--grid-line': 'rgba(139, 188, 230, 0.08)',
};

const DARK_START = {
  '--bg': '#080d12',
  '--bg-strong': '#101821',
  '--panel': 'rgba(15, 24, 33, 0.94)',
  '--panel-solid': '#121d27',
  '--ink': '#f4f8fb',
  '--muted': '#c4cfda',
  '--line': '#526273',
  '--line-strong': '#8a9aac',
  '--blueprint': '#8bbce6',
  '--grid-line': 'rgba(139, 188, 230, 0.11)',
};

const DARK_END = {
  '--bg': '#010307',
  '--bg-strong': '#02070f',
  '--panel': 'rgba(4, 9, 16, 0.96)',
  '--panel-solid': '#060d16',
  '--ink': '#dbe6f0',
  '--muted': '#a7b8c7',
  '--line': '#1f2833',
  '--line-strong': '#455364',
  '--blueprint': '#6293bd',
  '--grid-line': 'rgba(139, 188, 230, 0.05)',
};

function parseColor(color: string): [number, number, number, number] {
  const cleanColor = color.trim();
  if (cleanColor.startsWith('#')) {
    const hex = cleanColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b, 1];
  }
  if (cleanColor.startsWith('rgba') || cleanColor.startsWith('rgb')) {
    const parts = cleanColor.match(/[\d.]+/g);
    if (parts) {
      const r = parseFloat(parts[0]);
      const g = parseFloat(parts[1]);
      const b = parseFloat(parts[2]);
      const a = parts[3] ? parseFloat(parts[3]) : 1;
      return [r, g, b, a];
    }
  }
  return [0, 0, 0, 1];
}

function interpolateColors(color1: string, color2: string, factor: number): string {
  const [r1, g1, b1, a1] = parseColor(color1);
  const [r2, g2, b2, a2] = parseColor(color2);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));
  const a = a1 + factor * (a2 - a1);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function useScrollTransition(mode: ThemeMode) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      // Depth factor (0 = top/surface, 1 = bottom/depth)
      const factor = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      // Detect current theme mode from HTML element to ensure absolute synchronization
      const isDarkMode = document.documentElement.getAttribute('data-time-mode') === 'rest';

      const startSet = isDarkMode ? DARK_START : LIGHT_START;
      const endSet = isDarkMode ? DARK_END : LIGHT_END;

      // Smoothly interpolate each CSS custom variable
      Object.keys(startSet).forEach((key) => {
        const startVal = startSet[key as keyof typeof startSet];
        const endVal = endSet[key as keyof typeof endSet];
        const interpolated = interpolateColors(startVal, endVal, factor);
        document.documentElement.style.setProperty(key, interpolated);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially
    handleScroll();

    // Observe changes to document theme (e.g. ModeSwitch click)
    const observer = new MutationObserver(handleScroll);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-time-mode'] });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();

      // Clean up variables on unmount (revert to stylesheet defaults)
      const isDarkMode = document.documentElement.getAttribute('data-time-mode') === 'rest';
      const startSet = isDarkMode ? DARK_START : LIGHT_START;
      Object.keys(startSet).forEach((key) => {
        document.documentElement.style.removeProperty(key);
      });
    };
  }, [mode]);
}
