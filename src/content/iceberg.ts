export type IcebergLayerId = 'surface' | 'complexity' | 'evidence' | 'signal' | 'depth';

export interface IcebergLayer {
  id: IcebergLayerId;
  label: string;
  shortLabel: string;
  depth: number;
}

export const icebergLayers: IcebergLayer[] = [
  { id: 'surface', label: 'Superficie — Ruido', shortLabel: 'Ruido', depth: 0 },
  { id: 'complexity', label: 'Complejidad organizacional', shortLabel: 'Complejidad', depth: 1 },
  { id: 'evidence', label: 'Evidencia visual', shortLabel: 'Evidencia', depth: 2 },
  { id: 'signal', label: 'Señal — Playbook', shortLabel: 'Playbook', depth: 3 },
  { id: 'depth', label: 'Profundidad — Casos', shortLabel: 'Casos', depth: 4 },
];

export const hero = {
  macro: 'Economía Circular',
  narrative: 'Complejidad + Industria + IA',
  eyebrow: 'Superficie del iceberg',
  title: 'El ruido de 2026 no es estrategia. Es complejidad sin mapa.',
  subcopy:
    'Sobran frameworks de entorno, agentes y promesas de automatización. Antes de tocar IA, describa el sistema que va a acelerar — y filtre el ruido que destruye margen.',
  ctaPrimary: { label: 'Ver el Playbook', href: '#iceberg-signal' },
  ctaSecondary: { label: 'Bajar a la complejidad', href: '#iceberg-complexity' },
};
