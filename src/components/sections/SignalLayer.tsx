import { useI18n } from '../../hooks/useI18n';
import { PlaybookCards } from '../ui/PlaybookCards';
import { Reveal } from '../ui/Reveal';
import './SignalLayer.css';

export function SignalLayer() {
  const { content } = useI18n();
  const { signalLead, playbook } = content;
  const { simplicityStrategy } = content.complexity;

  return (
    <section id="iceberg-signal" className="layer layer--signal" aria-labelledby="signal-title">
      <div className="content-wrapper">
        {/* Simplicity Strategy Section */}
        <Reveal>
          <p className="eyebrow">{simplicityStrategy.eyebrow}</p>
          <h2>{simplicityStrategy.title}</h2>
          <p className="lead">{simplicityStrategy.definition}</p>
        </Reveal>

        <div className="strategy-grid" style={{ marginBlock: '2.5rem 4rem' }}>
          {simplicityStrategy.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="strategy-card panel">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Executive Advisor (PhD Andrés López Astudillo) Section */}
        <div style={{ marginTop: '4.5rem' }}>
          <Reveal>
            <p className="eyebrow eyebrow--muted">{signalLead.eyebrow}</p>
            <h2 id="signal-title">{signalLead.title}</h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <article className="signal-lead panel" id="equipo" style={{ marginTop: '1.5rem' }}>
            <div className="signal-lead__metrics">
              {signalLead.metrics?.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                  <p className="metric-desc">{metric.desc}</p>
                </div>
              ))}
            </div>
            <div className="signal-lead__body">
              <span className="signal-lead__role">{signalLead.role}</span>
              <h3>{signalLead.name}</h3>
              <p>{signalLead.quote}</p>
            </div>
          </article>
        </Reveal>

        {/* Operational Playbook Section */}
        <div style={{ marginTop: '5rem' }}>
          <Reveal delay={0.12}>
            <p className="eyebrow eyebrow--muted">
              {playbook.eyebrow}
            </p>
            <h2>{playbook.title}</h2>
            <p className="lead">{playbook.lead}</p>
          </Reveal>
        </div>
        
        <PlaybookCards />
      </div>
    </section>
  );
}
