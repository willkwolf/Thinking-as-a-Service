import type { IcebergLayerId } from '../../content/site';
import { useI18n } from '../../hooks/useI18n';
import './IcebergProgress.css';

interface IcebergProgressMobileProps {
  activeLayer: IcebergLayerId;
}

export function IcebergProgressMobile({ activeLayer }: IcebergProgressMobileProps) {
  const { content } = useI18n();
  const { icebergLayers } = content;

  return (
    <nav className="iceberg-progress-mobile" aria-label="Capas del iceberg">
      {icebergLayers.map((layer) => (
        <a
          key={layer.id}
          href={`#iceberg-${layer.id}`}
          aria-current={layer.id === activeLayer ? 'step' : undefined}
        >
          {layer.shortLabel}
        </a>
      ))}
    </nav>
  );
}

