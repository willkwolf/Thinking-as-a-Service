import { useI18n } from '../../hooks/useI18n';
import { CemstwoGraph } from '../ui/CemstwoGraph';
import { Reveal } from '../ui/Reveal';

export function CemstwoLayer() {
  const { content } = useI18n();
  const { cemstwo } = content.complexity;

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
      </div>
    </section>
  );
}
