import type { IcebergLayerId } from '../../content/iceberg';
import { icebergLayers } from '../../content/iceberg';
import './IcebergProgress.css';

interface IcebergProgressMobileProps {
  activeLayer: IcebergLayerId;
}

export function IcebergProgressMobile({ activeLayer }: IcebergProgressMobileProps) {
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
