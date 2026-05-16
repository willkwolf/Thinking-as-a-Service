import { useEffect, useState } from 'react';
import type { IcebergLayerId } from '../content/iceberg';
import { icebergLayers } from '../content/iceberg';

export function useIcebergDepth() {
  const [activeLayer, setActiveLayer] = useState<IcebergLayerId>('surface');

  useEffect(() => {
    const sections = icebergLayers
      .map((layer) => ({
        id: layer.id,
        el: document.getElementById(`iceberg-${layer.id}`),
      }))
      .filter((s): s is { id: IcebergLayerId; el: HTMLElement } => Boolean(s.el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target.id) {
          const layerId = top.target.id.replace('iceberg-', '') as IcebergLayerId;
          setActiveLayer(layerId);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.55] }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { activeLayer, layers: icebergLayers };
}
