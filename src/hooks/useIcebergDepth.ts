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
      () => {
        const focalPoint = window.innerHeight * 0.35;
        let activeId: IcebergLayerId | null = null;

        for (const { id, el } of sections) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
            activeId = id;
            break;
          }
        }

        if (activeId) {
          setActiveLayer(activeId);
        }
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { activeLayer, layers: icebergLayers };
}
