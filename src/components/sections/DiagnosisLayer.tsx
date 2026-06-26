import { useI18n } from '../../hooks/useI18n';
import { Reveal } from '../ui/Reveal';

export function DiagnosisLayer() {
  const { content, locale } = useI18n();
  const { diagnosis } = content.complexity;

  const comparison = locale === 'es' ? {
    title: 'Cambiando las Reglas del Juego',
    traditionalHeader: 'Mercado Tradicional (Fábricas / Staff Augmentation)',
    impactHeader: 'Consultoría de Impacto (Nosotros)',
    rows: [
      {
        traditional: '"Bolsas de horas" para construir lo que usted les pida, funcione o no.',
        impact: 'Diagnóstico visual de dónde está perdiendo dinero antes de programar.'
      },
      {
        traditional: 'Implementación de IA a ciegas, automatizando procesos ineficientes.',
        impact: 'Simplificación del sistema para que la IA actúe solo donde genera margen.'
      },
      {
        traditional: 'Contratos basados en esfuerzo (¿Cuántas horas trabajé?).',
        impact: 'Contratos basados en valor (¿Cuánto desperdicio eliminé?).'
      }
    ]
  } : {
    title: 'Changing the Rules of the Game',
    traditionalHeader: 'Traditional Market (Factories / Staff Augmentation)',
    impactHeader: 'Impact Consulting (Us)',
    rows: [
      {
        traditional: '"Hourly pools" to build whatever you ask for, whether it works or not.',
        impact: 'Visual diagnosis of where you are losing money before programming.'
      },
      {
        traditional: 'Blind AI implementation, automating inefficient processes.',
        impact: 'System simplification so that AI operates only where it generates margins.'
      },
      {
        traditional: 'Contracts based on effort (How many hours did I work?).',
        impact: 'Contracts based on value (How much waste did I eliminate?).'
      }
    ]
  };

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

        {/* Traditional vs Impact Comparison Grid */}
        <div style={{ marginTop: '3.5rem' }}>
          <Reveal>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--step-3)' }}>
              {comparison.title}
            </h3>
          </Reveal>
          <div className="comparison-table panel">
            <div className="comparison-header-row" style={{ background: 'rgba(22, 60, 38, 0.05)', borderBottom: '1px solid var(--line)' }}>
              <div className="comparison-header-col-traditional">
                {comparison.traditionalHeader}
              </div>
              <div className="comparison-header-col-impact">
                {comparison.impactHeader}
              </div>
            </div>
            {comparison.rows.map((row, index) => (
              <div key={index} className="comparison-row" style={{ borderBottom: index < comparison.rows.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div className="comparison-col-traditional">
                  {row.traditional}
                </div>
                <div className="comparison-col-impact">
                  {row.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.16}>
          <ul className="bullet-list bullet-list--critical" style={{ marginTop: '3rem' }}>
            {diagnosis.bullets.map((b) => (
              <li key={b.text}>
                <strong>{b.highlight}</strong> {b.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
