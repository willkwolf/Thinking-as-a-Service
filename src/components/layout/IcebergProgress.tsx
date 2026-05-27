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

  const getMeters = (index: number) => {
    const depths = ['0m', '150m', '300m', '450m', '600m', '800m', '1200m'];
    return depths[index] || '0m';
  };

  return (
    <nav className="iceberg-progress" aria-label="Profundidad del iceberg">
      <div className="iceberg-progress__backdrop" />
      <div className="iceberg-progress__ruler" aria-hidden="true">
        {Array.from({ length: 31 }).map((_, i) => (
          <span key={i} className={`iceberg-progress__tick ${i % 5 === 0 ? 'iceberg-progress__tick--major' : ''}`} />
        ))}
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
                  <span className="iceberg-progress__meters">{getMeters(index)}</span>
                  <span className="iceberg-progress__dot" />
                </div>
                <span className="iceberg-progress__label">{layer.shortLabel}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <div className="iceberg-progress__depth" aria-hidden>
        <span style={{ height: `${(activeIndex / (icebergLayers.length - 1)) * 100}%` }} />
      </div>
    </nav>
  );
}

