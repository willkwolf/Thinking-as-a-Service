import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import type { ThemeMode } from './useThemeMode';

export function useD3Background(mode: ThemeMode) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId = 0;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('aria-hidden', 'true');

    const getColor = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    let lineColor = getColor('--blueprint');
    let nodeColor = getColor('--signal');

    const numNodes = width < 768 ? 32 : 72;
    const nodes = d3.range(numNodes).map(() => ({
      radius: Math.random() * 2 + 1,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
    }));

    const g = svg.append('g');

    const render = () => {
      const threshold = width < 768 ? 92 : 145;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      const links: { source: (typeof nodes)[0]; target: (typeof nodes)[0]; opacity: number }[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            links.push({ source: nodes[i], target: nodes[j], opacity: 1 - dist / threshold });
          }
        }
      }

      const lines = g.selectAll<SVGLineElement, (typeof links)[0]>('line').data(links);
      lines
        .enter()
        .append('line')
        .merge(lines)
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)
        .attr('stroke', lineColor)
        .attr('stroke-width', 0.7)
        .attr('opacity', (d) => d.opacity * 0.42);
      lines.exit().remove();

      const circles = g.selectAll<SVGCircleElement, (typeof nodes)[0]>('circle').data(nodes);
      circles
        .enter()
        .append('circle')
        .merge(circles)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.radius)
        .attr('fill', nodeColor)
        .attr('opacity', 0.46);
      circles.exit().remove();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      svg.attr('width', width).attr('height', height);
    };

    const observer = new MutationObserver(() => {
      lineColor = getColor('--blueprint');
      nodeColor = getColor('--signal');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-time-mode'] });

    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      svg.remove();
    };
  }, [mode]);

  return containerRef;
}
