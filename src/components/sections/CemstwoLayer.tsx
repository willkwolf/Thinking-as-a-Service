import { useI18n } from '../../hooks/useI18n';
import { CemstwoGraph } from '../ui/CemstwoGraph';
import { Reveal } from '../ui/Reveal';

export function CemstwoLayer() {
  const { content } = useI18n();
  const { cemstwo, simplicityStrategy } = content.complexity;

  return (
    <section id="iceberg-cemstwo" className="layer layer--cemstwo" aria-labelledby="cemstwo-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{cemstwo.eyebrow}</p>
          <h2 id="cemstwo-title">{cemstwo.title}</h2>
          <p className="lead">{cemstwo.lead}</p>
        </Reveal>

        <div style={{ marginBlock: '2.5rem' }}>
          <CemstwoGraph />
        </div>

        <div style={{ marginTop: '5rem' }}>
          <Reveal delay={0.1}>
            <p className="eyebrow eyebrow--muted">
              {simplicityStrategy.eyebrow}
            </p>
            <h2>{simplicityStrategy.title}</h2>
            <p className="lead">{simplicityStrategy.definition}</p>
          </Reveal>
        </div>

        <div className="strategy-grid" style={{ marginTop: '2.5rem' }}>
          {simplicityStrategy.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="strategy-card panel">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
