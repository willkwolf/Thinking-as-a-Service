import type { ThemeMode } from '../../hooks/useThemeMode';
import './ModeSwitch.css';

interface ModeSwitchProps {
  mode: ThemeMode;
  onModeChange: (mode: ThemeMode, persist?: boolean) => void;
}

export function ModeSwitch({ mode, onModeChange }: ModeSwitchProps) {
  return (
    <div className="mode-switch" role="group" aria-label="Modo visual">
      {(['day', 'rest'] as const).map((option) => (
        <button
          key={option}
          type="button"
          className="mode-switch__button"
          aria-pressed={mode === option}
          onClick={() => onModeChange(option, true)}
        >
          {option === 'day' ? 'Día' : 'Descanso'}
        </button>
      ))}
    </div>
  );
}
