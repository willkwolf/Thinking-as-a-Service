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

  return (
    <nav className="iceberg-progress" aria-label="Profundidad del iceberg">
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
                <span className="iceberg-progress__dot" aria-hidden />
                <span className="iceberg-progress__label">{layer.shortLabel}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <div className="iceberg-progress__depth" aria-hidden>
        <span style={{ height: `${((activeIndex + 1) / icebergLayers.length) * 100}%` }} />
      </div>
    </nav>
  );
}

