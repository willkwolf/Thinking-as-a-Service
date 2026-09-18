import { useEffect, useState } from 'react';
import type { IcebergLayerId } from '../../content/site';
import { useI18n } from '../../hooks/useI18n';
import './IcebergProgress.css';

interface IcebergProgressProps {
  activeLayer: IcebergLayerId;
}

export function IcebergProgress({ activeLayer }: IcebergProgressProps) {
  const { content } = useI18n();
  const { icebergLayers } = content;
  const activeIndex = icebergLayers.findIndex((l) => l.id === activeLayer);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
        setScrollPercent(pct);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMeters = (index: number) => {
    const depths = ['0m', '150m', '300m', '450m', '600m', '800m', '1000m', '1200m'];
    return depths[index] || '0m';
  };

  const isDarkLayer = ['formula', 'cemstwo', 'signal', 'proposal', 'depth'].includes(activeLayer);

  return (
    <nav className={`iceberg-progress ${isDarkLayer ? 'iceberg-progress--dark-bg' : ''}`} aria-label="Profundidad del iceberg">
      <div className="iceberg-progress__backdrop" aria-hidden="true" />
      
      {/* Unified Single Scroll Track */}
      <div className="iceberg-progress__track" aria-hidden="true">
        <div className="iceberg-progress__rail" />
        <div className="iceberg-progress__fill" style={{ height: `${scrollPercent}%` }} />
        <div className="iceberg-progress__pip" style={{ top: `${scrollPercent}%` }} />
      </div>

      <ol className="iceberg-progress__list">
        {icebergLayers.map((layer, index) => {
          const isActive = layer.id === activeLayer;
          const isPast = index < activeIndex;
          return (
            <li key={layer.id} className="iceberg-progress__item">
              <a
                href={`#iceberg-${layer.id}`}
                className={[
                  'iceberg-progress__link',
                  isActive && 'iceberg-progress__link--active',
                  isPast && 'iceberg-progress__link--past',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={isActive ? 'step' : undefined}
              >
                <div className="iceberg-progress__telemetry">
                  <span className="iceberg-progress__dot" />
                  <span className="iceberg-progress__meters">{getMeters(index)}</span>
                </div>
                <span className="iceberg-progress__label">{layer.shortLabel}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

