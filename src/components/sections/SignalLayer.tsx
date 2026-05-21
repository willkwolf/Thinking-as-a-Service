import { useI18n } from '../../hooks/useI18n';
import { PlaybookCards } from '../ui/PlaybookCards';
import { Reveal } from '../ui/Reveal';
import './SignalLayer.css';

export function SignalLayer() {
  const { content } = useI18n();
  const { signalLead, playbook } = content;

  return (
    <section id="iceberg-signal" className="layer layer--signal" aria-labelledby="signal-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{signalLead.eyebrow}</p>
          <h2 id="signal-title">{signalLead.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="signal-lead panel" id="equipo">
            <img src={signalLead.photo} alt={signalLead.name} loading="lazy" decoding="async" />
            <div className="signal-lead__body">
              <span className="signal-lead__role">{signalLead.role}</span>
              <h3>{signalLead.name}</h3>
              <p>{signalLead.quote}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '2.5rem' }}>
            {playbook.eyebrow}
          </p>
          <h2>{playbook.title}</h2>
          <p className="lead">{playbook.lead}</p>
        </Reveal>
        <PlaybookCards />
      </div>
    </section>
  );
}

