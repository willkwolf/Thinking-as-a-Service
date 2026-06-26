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
              <article className="strategy-card clean-col">
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
            <div className="signal-lead__body-wrapper">
              <div className="signal-lead__body">
                <span className="signal-lead__role">{signalLead.role}</span>
                <h3>{signalLead.name}</h3>
                <p className="signal-lead__quote">{signalLead.quote}</p>
              </div>
              <div className="signal-lead__tarot-sword">
                <svg viewBox="0 0 100 240" className="tarot-sword-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Espada de la Realidad y Certidumbre Operativa">
                  {/* Sacred Geometry Circles */}
                  <circle cx="50" cy="120" r="42" stroke="rgba(176, 141, 62, 0.08)" strokeWidth="0.8" />
                  <circle cx="50" cy="120" r="28" stroke="rgba(176, 141, 62, 0.12)" strokeWidth="0.8" strokeDasharray="3 3" />
                  <circle cx="50" cy="120" r="14" stroke="rgba(22, 60, 38, 0.08)" strokeWidth="0.8" />
                  
                  {/* Outer delicate guidelines */}
                  <line x1="50" y1="10" x2="50" y2="230" stroke="rgba(176, 141, 62, 0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="10" y1="120" x2="90" y2="120" stroke="rgba(176, 141, 62, 0.1)" strokeWidth="0.5" strokeDasharray="4 4" />

                  {/* Sword blade */}
                  <line x1="50" y1="35" x2="50" y2="185" stroke="var(--blueprint)" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="49.2" y1="35" x2="49.2" y2="185" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
                  
                  {/* Sword Tip */}
                  <polygon points="50,22 54.5,36 45.5,36" fill="var(--blueprint)" />
                  <polygon points="50,26 52.5,35 47.5,35" fill="#fff" opacity="0.8" />
                  
                  {/* Crossguard */}
                  <path d="M 28 185 C 38 183, 62 183, 72 185" stroke="var(--blueprint)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="26" cy="185" r="2" fill="var(--blueprint)" />
                  <circle cx="74" cy="185" r="2" fill="var(--blueprint)" />

                  {/* Grip */}
                  <line x1="50" y1="185" x2="50" y2="215" stroke="var(--blueprint)" strokeWidth="3.2" strokeLinecap="round" />
                  <line x1="50" y1="192" x2="50" y2="208" stroke="var(--line-strong)" strokeWidth="1" />
                  
                  {/* Pommel */}
                  <circle cx="50" cy="222" r="4.5" fill="var(--blueprint)" />
                  <circle cx="50" cy="222" r="1.5" fill="#fff" />
                </svg>
              </div>
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
