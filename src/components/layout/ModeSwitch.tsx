import type { Locale } from '../../content/site';
import './ModeSwitch.css';

interface ModeSwitchProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function ModeSwitch({ locale, onLocaleChange }: ModeSwitchProps) {
  return (
    <div className="controls-panel panel">
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
