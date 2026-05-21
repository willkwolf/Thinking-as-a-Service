import { useI18n } from '../../hooks/useI18n';
import { Reveal } from '../ui/Reveal';

export function DiagnosisLayer() {
  const { content } = useI18n();
  const { diagnosis } = content.complexity;

  return (
    <section id="iceberg-diagnosis" className="layer layer--diagnosis" aria-labelledby="diagnosis-title">
      <div className="content-wrapper narrow">
        <Reveal>
          <p className="eyebrow">{diagnosis.eyebrow}</p>
          <h2 id="diagnosis-title">{diagnosis.title}</h2>
          <p className="lead">{diagnosis.lead}</p>
        </Reveal>

        <div className="split-grid complexity-blocks" style={{ marginTop: '2rem' }}>
          <Reveal delay={0.08}>
            <article className="complexity-block panel">
              <h3>{diagnosis.external.label}</h3>
              <p>{diagnosis.external.text}</p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="complexity-block panel complexity-block--critical">
              <h3>{diagnosis.internal.label}</h3>
              <p>{diagnosis.internal.text}</p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <ul className="bullet-list bullet-list--critical" style={{ marginTop: '2.5rem' }}>
            {diagnosis.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
