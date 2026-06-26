import { useState } from 'react';
import type { IcebergLayerId } from '../../content/site';
import { useI18n } from '../../hooks/useI18n';
import './IcebergProgress.css';

interface IcebergProgressMobileProps {
  activeLayer: IcebergLayerId;
}

export function IcebergProgressMobile({ activeLayer }: IcebergProgressMobileProps) {
  const { content } = useI18n();
  const { icebergLayers } = content;
  const [isOpen, setIsOpen] = useState(false);

  const activeIndex = icebergLayers.findIndex((layer) => layer.id === activeLayer);
  const displayIndex = activeIndex !== -1 ? activeIndex : 0;
  const currentLayer = icebergLayers[displayIndex];

  const totalLayers = icebergLayers.length;
  const progressPercent = ((displayIndex + 1) / totalLayers) * 100;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(`iceberg-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDarkLayer = ['formula', 'cemstwo', 'signal', 'proposal', 'depth'].includes(activeLayer);

  return (
    <div className={`iceberg-progress-mobile-container ${isDarkLayer ? 'iceberg-progress-mobile-container--dark-bg' : ''}`}>
      <nav className="iceberg-progress-mobile-header" aria-label="Capas del iceberg">
        <div className="iceberg-progress-mobile-header__main">
          <div className="iceberg-progress-mobile-header__current">
            <span className="iceberg-progress-mobile-header__number">
              {String(displayIndex + 1).padStart(2, '0')} / {String(totalLayers).padStart(2, '0')}
            </span>
            <span className="iceberg-progress-mobile-header__dot-separator">&middot;</span>
            <span className="iceberg-progress-mobile-header__label">
              {currentLayer?.shortLabel}
            </span>
          </div>

          <button
            className={`iceberg-progress-mobile-header__toggle ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span className="burger-line line-1" />
            <span className="burger-line line-2" />
            <span className="burger-line line-3" />
          </button>
        </div>

        {/* Vertical Dropdown Drawer */}
        <div className={`iceberg-progress-mobile-drawer ${isOpen ? 'is-open' : ''}`}>
          <ul className="iceberg-progress-mobile-drawer__list">
            {icebergLayers.map((layer, index) => {
              const isActive = layer.id === activeLayer;
              return (
                <li key={layer.id} className="iceberg-progress-mobile-drawer__item">
                  <a
                    href={`#iceberg-${layer.id}`}
                    onClick={(e) => handleLinkClick(e, layer.id)}
                    className={`iceberg-progress-mobile-drawer__link ${isActive ? 'is-active' : ''}`}
                  >
                    <span className="iceberg-progress-mobile-drawer__num">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="iceberg-progress-mobile-drawer__text">
                      {layer.label}
                    </span>
                    {isActive && <span className="iceberg-progress-mobile-drawer__indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dynamic glowing progress line */}
        <div className="iceberg-progress-mobile-progress-bar">
          <div 
            className="iceberg-progress-mobile-progress-bar__fill" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
      </nav>
    </div>
  );
}
