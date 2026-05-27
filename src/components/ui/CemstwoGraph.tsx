import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './CemstwoGraph.css';

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  C: { x: 50, y: 12 },
  E: { x: 74.25, y: 26 },
  M: { x: 74.25, y: 54 },
  S: { x: 50, y: 68 },
  W: { x: 25.75, y: 54 },
  O: { x: 25.75, y: 26 },
  T: { x: 50, y: 40 },
};

const EDGES: [string, string][] = [
  // Star connections (Center T to others)
  ['C', 'T'],
  ['E', 'T'],
  ['M', 'T'],
  ['S', 'T'],
  ['W', 'T'],
  ['O', 'T'],
  // Ring connections (Wheel outer boundary)
  ['C', 'E'],
  ['E', 'M'],
  ['M', 'S'],
  ['S', 'W'],
  ['W', 'O'],
  ['O', 'C'],
];

export function CemstwoGraph() {
  const { content } = useI18n();
  const { cemstwo } = content.complexity;
  const { ui } = content;
  const [selectedId, setSelectedId] = useState<'C' | 'E' | 'M' | 'S' | 'T' | 'W' | 'O'>('T');
  const svgRef = useRef<SVGSVGElement>(null);

  // Find currently active node details
  const activeNode = cemstwo.nodes.find((n) => n.id === selectedId) || cemstwo.nodes[4]; // Default to T (index 4)

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // 1. Add Soft Gold Shadow Filter in Defs
    const defs = svg.append('defs');
    const glowFilter = defs
      .append('filter')
      .attr('id', 'node-shadow')
      .attr('x', '-30%')
      .attr('y', '-30%')
      .attr('width', '160%')
      .attr('height', '160%');

    glowFilter
      .append('feDropShadow')
      .attr('dx', '0')
      .attr('dy', '1')
      .attr('stdDeviation', '1')
      .attr('flood-color', '#b08d3e')
      .attr('flood-opacity', '0.22');

    // 2. Draw Edges (Links)
    const edgeGroup = svg.append('g').attr('class', 'cemstwo-graph__edges');

    edgeGroup
      .selectAll('line')
      .data(EDGES)
      .enter()
      .append('line')
      .attr('x1', (d) => NODE_POSITIONS[d[0]].x)
      .attr('y1', (d) => NODE_POSITIONS[d[0]].y)
      .attr('x2', (d) => NODE_POSITIONS[d[1]].x)
      .attr('y2', (d) => NODE_POSITIONS[d[1]].y)
      .attr('class', (d) => {
        const isConnected = d[0] === selectedId || d[1] === selectedId;
        return `cemstwo-graph__edge${isConnected ? ' cemstwo-graph__edge--active' : ''}`;
      });

    // 3. Draw Nodes Group
    const nodeGroup = svg.append('g').attr('class', 'cemstwo-graph__nodes');

    const nodesData = Object.entries(NODE_POSITIONS).map(([id, pos]) => ({
      id: id as 'C' | 'E' | 'M' | 'S' | 'T' | 'W' | 'O',
      ...pos,
    }));

    const nodes = nodeGroup
      .selectAll('g')
      .data(nodesData)
      .enter()
      .append('g')
      .attr('class', (d) => `cemstwo-graph__node-group${d.id === selectedId ? ' cemstwo-graph__node-group--active' : ''}`)
      .attr('tabindex', '0')
      .attr('role', 'button')
      .attr('aria-label', (d) => {
        const details = cemstwo.nodes.find((n) => n.id === d.id);
        return `${d.id}: ${details?.label || ''}`;
      })
      .style('outline', 'none')
      .on('mouseover focusin', function (_event, d) {
        setSelectedId(d.id);
      })
      .on('click touchstart', function (event, d) {
        event.preventDefault();
        setSelectedId(d.id);
      })
      .on('keydown', function (event, d) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setSelectedId(d.id);
        }
      });

    // Append outer structural circle for nodes
    nodes
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => (d.id === selectedId ? 6.5 : 5))
      .attr('class', (d) => `cemstwo-graph__node${d.id === selectedId ? ' cemstwo-graph__node--active' : ''}`)
      .style('filter', (d) => (d.id === selectedId ? 'url(#node-shadow)' : 'none'))
      .style('transition', 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)');

    // Append text letter label
    nodes
      .append('text')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y + 0.3)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('class', (d) => `cemstwo-graph__label${d.id === selectedId ? ' cemstwo-graph__label--active' : ''}`)
      .text((d) => d.id)
      .style('transition', 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)');

  }, [selectedId, cemstwo]);

  return (
    <Reveal delay={0.15}>
      <div className="cemstwo-section panel">
        <div className="cemstwo-grid">
          {/* Left Column: Interactive D3 Graph */}
          <div className="cemstwo-graph__visualization">
            <svg
              ref={svgRef}
              viewBox="0 0 100 80"
              className="cemstwo-graph__svg"
              preserveAspectRatio="xMidYMid meet"
            />
            <p className="cemstwo-graph__instruction">
              {ui.graphInstruction}
            </p>
          </div>

          {/* Right Column: Sleek detail card */}
          <div className="cemstwo-graph__detail" aria-live="polite">
            <header className="cemstwo-detail__header">
              <span className="cemstwo-detail__letter">{activeNode.id}</span>
              <div className="cemstwo-detail__title-group">
                <span className="cemstwo-detail__eyebrow">{ui.currentNode}</span>
                <h3>{activeNode.label}</h3>
              </div>
            </header>

            <div className="cemstwo-detail__body">
              <div className="cemstwo-detail__question-box">
                <p className="cemstwo-detail__question">{activeNode.question}</p>
              </div>
              <p className="cemstwo-detail__summary">{activeNode.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
