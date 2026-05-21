import { useI18n } from '../../hooks/useI18n';
import { Reveal } from '../ui/Reveal';
import { SimplicityMatrix } from '../ui/SimplicityMatrix';

export function FormulaLayer() {
  const { content } = useI18n();
  const { formula, tippingPoint } = content.complexity;

  return (
    <section id="iceberg-formula" className="layer layer--formula" aria-labelledby="formula-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{formula.eyebrow}</p>
          <h2 id="formula-title">{formula.title}</h2>
          <p className="formula-expression">{formula.expression}</p>
        </Reveal>

        <div className="split-grid complexity-blocks" style={{ marginBottom: '4rem' }}>
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
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '2.5rem' }}>
            {tippingPoint.eyebrow}
          </p>
          <h2>{tippingPoint.title}</h2>
          <p className="lead">{tippingPoint.lead}</p>
        </Reveal>

        <div className="split-grid complexity-blocks" style={{ marginTop: '2rem' }}>
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
          <p className="impact-stat text-danger" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
            {tippingPoint.impact}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '2.5rem' }}>
            Matriz de Simplicidad
          </p>
          <h2>¿Dónde está su organización?</h2>
        </Reveal>
        <SimplicityMatrix />
      </div>
    </section>
  );
}
