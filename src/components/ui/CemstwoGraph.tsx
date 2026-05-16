import { cemstwo } from '../../content/complexity';
import { Reveal } from './Reveal';
import './CemstwoGraph.css';

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  C: { x: 50, y: 12 },
  E: { x: 18, y: 42 },
  M: { x: 35, y: 32 },
  S: { x: 65, y: 32 },
  T: { x: 82, y: 42 },
  W: { x: 65, y: 68 },
  O: { x: 35, y: 68 },
};

const EDGES: [string, string][] = [
  ['C', 'M'],
  ['E', 'M'],
  ['M', 'S'],
  ['S', 'T'],
  ['T', 'W'],
  ['W', 'O'],
  ['M', 'O'],
];

export function CemstwoGraph() {
  return (
    <Reveal delay={0.2}>
      <div className="cemstwo-graph panel" role="img" aria-label="Grafo CEMSTWO con nodos C E M S T W O">
        <svg viewBox="0 0 100 80" className="cemstwo-graph__svg" preserveAspectRatio="xMidYMid meet">
          {EDGES.map(([from, to]) => {
            const a = NODE_POSITIONS[from];
            const b = NODE_POSITIONS[to];
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="cemstwo-graph__edge"
              />
            );
          })}
          {cemstwo.nodes.map((id) => {
            const pos = NODE_POSITIONS[id];
            return (
              <g key={id} transform={`translate(${pos.x}, ${pos.y})`}>
                <circle r="5.5" className="cemstwo-graph__node" />
                <text y="1.2" textAnchor="middle" className="cemstwo-graph__label">
                  {id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </Reveal>
  );
}
