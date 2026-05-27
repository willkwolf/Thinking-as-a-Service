import { useI18n } from '../../hooks/useI18n';
import { Reveal } from '../ui/Reveal';
import './EvidenceLayer.css';

export function EvidenceLayer() {
  const { content, locale } = useI18n();
  const { evidence } = content.complexity;

  return (
    <section id="iceberg-evidence" className="layer layer--evidence" aria-labelledby="evidence-title">
      <div className="content-wrapper evidence-grid">
        <div>
          <Reveal>
            <p className="eyebrow">{evidence.eyebrow}</p>
            <h2 id="evidence-title">{evidence.title}</h2>
            <p className="lead">{evidence.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="bullet-list">
              {evidence.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="video-module panel">
          <header className="video-module__toolbar">
            <span>{evidence.video.label}</span>
            <strong className="video-module__duration">{evidence.video.duration}</strong>
          </header>
          <video controls playsInline preload="metadata" poster={evidence.video.poster}>
            <source src={evidence.video.src} type="video/mp4" />
            {content.ui.noVideo}
          </video>
          <footer className="video-module__notes">
            <strong>{locale === 'es' ? 'NOTA METODOLÓGICA:' : 'METHODOLOGY NOTE:'}</strong>
            <p>{evidence.video.note}</p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
