import type { IcebergLayerId } from '../../content/site';
import { useI18n } from '../../hooks/useI18n';
import './DesktopNavbar.css';

interface DesktopNavbarProps {
  activeLayer: IcebergLayerId;
  onOpenIntake?: () => void;
}

export function DesktopNavbar({ activeLayer, onOpenIntake }: DesktopNavbarProps) {
  const { content, locale } = useI18n();
  const { icebergLayers } = content;

  const isDarkLayer = ['formula', 'cemstwo', 'signal', 'proposal', 'depth'].includes(activeLayer);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(`iceberg-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = icebergLayers.findIndex((l) => l.id === activeLayer);
  const displayIndex = activeIndex >= 0 ? activeIndex + 1 : 1;

  return (
    <header
      className={`desktop-navbar ${isDarkLayer ? 'desktop-navbar--dark' : ''}`}
      aria-label="Navegación principal de escritorio"
    >
      <div className="desktop-navbar__inner">
        {/* Brand identity */}
        <div className="desktop-navbar__brand">
          <a
            href="#iceberg-surface"
            onClick={(e) => handleScrollTo(e, 'surface')}
            className="desktop-navbar__brand-link"
          >
            <span className="desktop-navbar__logo-text">Thinking as a Service</span>
            <span className="desktop-navbar__badge">
              {locale === 'es' ? 'Consultoría Pre-IA' : 'Pre-AI Strategy'}
            </span>
          </a>
        </div>

        {/* Iceberg depth wayfinder */}
        <nav className="desktop-navbar__nav" aria-label="Capas del iceberg">
          <ul className="desktop-navbar__list">
            {icebergLayers.map((layer, idx) => {
              const isActive = layer.id === activeLayer;
              const num = String(idx + 1).padStart(2, '0');
              return (
                <li key={layer.id} className="desktop-navbar__item">
                  <a
                    href={`#iceberg-${layer.id}`}
                    onClick={(e) => handleScrollTo(e, layer.id)}
                    className={`desktop-navbar__link ${isActive ? 'desktop-navbar__link--active' : ''}`}
                    aria-current={isActive ? 'step' : undefined}
                    title={layer.label}
                  >
                    <span className="desktop-navbar__num">{num}</span>
                    <span className="desktop-navbar__label">{layer.shortLabel}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="desktop-navbar__actions">
          <span className="desktop-navbar__depth-telemetry">
            DEP_0{displayIndex}/08
          </span>
          {onOpenIntake && (
            <button
              type="button"
              className="desktop-navbar__intake-btn"
              onClick={onOpenIntake}
            >
              {locale === 'es' ? 'Reality Audit' : 'Reality Audit'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
