export type IcebergLayerId =
  | 'surface'
  | 'diagnosis'
  | 'evidence'
  | 'formula'
  | 'cemstwo'
  | 'signal'
  | 'proposal'
  | 'depth';

export interface IcebergLayer {
  id: IcebergLayerId;
  label: string;
  shortLabel: string;
  depth: number;
}

export const icebergLayers: IcebergLayer[] = [
  { id: 'surface', label: 'Superficie — Ruido', shortLabel: 'Ruido', depth: 0 },
  { id: 'diagnosis', label: 'El Diagnóstico', shortLabel: 'Diagnóstico', depth: 1 },
  { id: 'evidence', label: 'Evidencia Visual', shortLabel: 'Evidencia', depth: 2 },
  { id: 'formula', label: 'Modelo de Complejidad', shortLabel: 'Complejidad', depth: 3 },
  { id: 'cemstwo', label: 'Resolución Sistémica', shortLabel: 'CEMSTWO', depth: 4 },
  { id: 'signal', label: 'Señal y Playbook', shortLabel: 'Playbook', depth: 5 },
  { id: 'proposal', label: 'Propuesta y Pricing', shortLabel: 'Pricing', depth: 6 },
  { id: 'depth', label: 'Profundidad y Casos', shortLabel: 'Casos', depth: 7 },
];

export const hero = {
  macro: 'Economía Circular',
  narrative: 'Complejidad + Industria + IA',
  eyebrow: 'Superficie del iceberg',
  title: 'El ruido de 2026 no es estrategia. Es complejidad sin mapa.',
  subcopy:
    'Sobran frameworks de entorno, agentes y promesas de automatización. Antes de tocar IA, describa el sistema que va a acelerar — y filtre el ruido que destruye margen.',
  ctaPrimary: { label: 'Ver el Playbook', href: '#iceberg-signal' },
  ctaSecondary: { label: 'Bajar a la complejidad', href: '#iceberg-diagnosis' },
};
