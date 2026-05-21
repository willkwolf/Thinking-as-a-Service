import type { ThemeMode } from '../../hooks/useThemeMode';
import type { Locale } from '../../content/site';
import './ModeSwitch.css';

interface ModeSwitchProps {
  mode: ThemeMode;
  onModeChange: (mode: ThemeMode, persist?: boolean) => void;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function ModeSwitch({ mode, onModeChange, locale, onLocaleChange }: ModeSwitchProps) {
  const toggleMode = () => {
    onModeChange(mode === 'day' ? 'rest' : 'day', true);
  };

  return (
    <div className="controls-panel panel">
      {/* Theme Toggle Button */}
      <button
        type="button"
        className="mode-toggle-btn"
        aria-label={mode === 'day' ? 'Activar modo oscuro' : 'Activar modo claro'}
        onClick={toggleMode}
      >
        {mode === 'day' ? (
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mode-icon"
            aria-hidden="true"
          >
            {/* Sun Icon */}
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mode-icon"
            aria-hidden="true"
          >
            {/* Moon Icon */}
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <span className="controls-panel__divider" aria-hidden="true" />

      {/* Language Selector */}
      <div className="lang-switch" role="group" aria-label="Seleccionar idioma / Select language">
        <button
          type="button"
          className={`lang-switch__btn ${locale === 'es' ? 'lang-switch__btn--active' : ''}`}
          onClick={() => onLocaleChange('es')}
          aria-pressed={locale === 'es'}
        >
          ES
        </button>
        <span className="lang-switch__separator" aria-hidden="true">|</span>
        <button
          type="button"
          className={`lang-switch__btn ${locale === 'en' ? 'lang-switch__btn--active' : ''}`}
          onClick={() => onLocaleChange('en')}
          aria-pressed={locale === 'en'}
        >
          EN
        </button>
      </div>
    </div>
  );
}
