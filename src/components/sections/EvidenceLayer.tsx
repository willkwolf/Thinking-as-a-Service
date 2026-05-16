import { evidence } from '../../content/complexity';
import { Reveal } from '../ui/Reveal';
import './EvidenceLayer.css';

export function EvidenceLayer() {
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
          <div className="video-module__toolbar">
            <span>{evidence.video.label}</span>
            <strong>{evidence.video.duration}</strong>
          </div>
          <video controls playsInline preload="metadata" poster={evidence.video.poster}>
            <source src={evidence.video.src} type="video/mp4" />
            Su navegador no soporta video HTML5.
          </video>
          <div className="video-module__notes">
            <strong>Uso recomendado:</strong>
            <span>{evidence.video.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
