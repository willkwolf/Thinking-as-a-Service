import {
  cemstwo,
  diagnosis,
  formula,
  simplicityStrategy,
  tippingPoint,
} from '../../content/complexity';
import { CemstwoGraph } from '../ui/CemstwoGraph';
import { Reveal } from '../ui/Reveal';
import { SimplicityMatrix } from '../ui/SimplicityMatrix';

export function ComplexityLayer() {
  return (
    <section id="iceberg-complexity" className="layer layer--complexity" aria-labelledby="complexity-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{diagnosis.eyebrow}</p>
          <h2 id="complexity-title">{diagnosis.title}</h2>
          <p className="lead">{diagnosis.lead}</p>
        </Reveal>

        <div className="split-grid complexity-blocks">
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
          <ul className="bullet-list bullet-list--critical">
            {diagnosis.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            {formula.eyebrow}
          </p>
          <h2>{formula.title}</h2>
          <p className="formula-expression">{formula.expression}</p>
        </Reveal>
        <div className="split-grid complexity-blocks">
          <Reveal delay={0.12}>
            <article className="complexity-block panel">
              <h3>{formula.complicated.label}</h3>
              <p>{formula.complicated.example}</p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="complexity-block panel">
              <h3>{formula.complex.label}</h3>
              <p>{formula.complex.example}</p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            {tippingPoint.eyebrow}
          </p>
          <h2>{tippingPoint.title}</h2>
          <p className="lead">{tippingPoint.lead}</p>
        </Reveal>
        <div className="split-grid complexity-blocks">
          <Reveal delay={0.12}>
            <article className="complexity-block panel">
              <h3>{tippingPoint.good.label}</h3>
              <p>{tippingPoint.good.text}</p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="complexity-block panel complexity-block--critical">
              <h3>{tippingPoint.bad.label}</h3>
              <p>{tippingPoint.bad.text}</p>
            </article>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="impact-stat text-danger">{tippingPoint.impact}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            Matriz de Simplicidad
          </p>
          <h2>¿Dónde está su organización?</h2>
        </Reveal>
        <SimplicityMatrix />

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            {cemstwo.eyebrow}
          </p>
          <h2>{cemstwo.title}</h2>
          <p className="lead">{cemstwo.lead}</p>
        </Reveal>
        <CemstwoGraph />

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            {simplicityStrategy.eyebrow}
          </p>
          <h2>{simplicityStrategy.title}</h2>
          <p className="lead">{simplicityStrategy.definition}</p>
        </Reveal>
        <div className="strategy-grid">
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
