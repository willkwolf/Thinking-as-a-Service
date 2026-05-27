import { useI18n } from '../../hooks/useI18n';
import { RiskPanel } from '../ui/RiskPanel';
import { Reveal } from '../ui/Reveal';

export function HeroSurface() {
  const { content } = useI18n();
  const { hero } = content;

  return (
    <section id="iceberg-surface" className="layer layer--surface" aria-labelledby="hero-title">
      <div className="content-wrapper hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow eyebrow--hero">{hero.macro}</span>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="subcopy">{hero.subcopy}</p>
          </Reveal>
          
          {/* Hand-crafted C-Suite Vector: The Hero's Journey (Caos to Simplificación) */}
          <Reveal delay={0.05}>
            <div className="hero-journey-panel">
              <svg viewBox="0 0 400 120" className="hero-journey-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama del Viaje del Héroe: del Caos a la Simplicidad">
                {/* Left: Scattered nodes (Noise/Chaos) */}
                <g opacity="0.6">
                  <circle cx="20" cy="50" r="1.5" fill="var(--danger)" />
                  <circle cx="35" cy="25" r="1.5" fill="var(--muted)" />
                  <circle cx="45" cy="70" r="1.5" fill="var(--danger)" />
                  <circle cx="60" cy="40" r="2" fill="var(--muted)" />
                  <circle cx="75" cy="85" r="1.5" fill="var(--danger)" />
                  <circle cx="80" cy="20" r="1.5" fill="var(--muted)" />
                  
                  {/* Fine connecting chaotic lines */}
                  <line x1="20" y1="50" x2="35" y2="25" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="35" y1="25" x2="60" y2="40" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="20" y1="50" x2="45" y2="70" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="45" y1="70" x2="60" y2="40" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="60" y1="40" x2="75" y2="85" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="60" y1="40" x2="80" y2="20" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="45" y1="70" x2="75" y2="85" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="1 1" />
                </g>

                {/* Center: The Sword / Threshold slice of reality */}
                <g>
                  {/* Sword blade / line of light */}
                  <line x1="120" y1="10" x2="120" y2="110" stroke="var(--blueprint)" strokeWidth="1.5" />
                  <polygon points="120,5 123,12 117,12" fill="var(--blueprint)" />
                  <circle cx="120" cy="95" r="3" fill="var(--blueprint)" />
                  {/* Crossguard */}
                  <line x1="110" y1="90" x2="130" y2="90" stroke="var(--blueprint)" strokeWidth="1.5" />
                </g>

                {/* Right: Clean, rising path (Signal/Simplicity) */}
                <g>
                  <path d="M 120 60 C 180 60, 220 90, 270 50 C 310 15, 340 30, 375 25" stroke="var(--line-strong)" strokeWidth="1.8" fill="none" />
                  <circle cx="270" cy="50" r="2.5" fill="var(--line-strong)" />
                  <circle cx="375" cy="25" r="3.5" fill="var(--blueprint)" />
                  
                  {/* Little shiny star on top of return */}
                  <polygon points="375,14 377,20 383,20 378,23 380,29 375,25 370,29 372,23 367,20 373,20" fill="var(--blueprint)" />
                </g>

                {/* Annotations */}
                <text x="20" y="105" fontFamily="var(--font-mono)" fontSize="6" fill="var(--danger)" letterSpacing="0.05em">01 / RUIDO</text>
                <text x="315" y="105" fontFamily="var(--font-mono)" fontSize="6" fill="var(--line-strong)" letterSpacing="0.05em">02 / SIMPLICIDAD</text>
                <text x="130" y="22" fontFamily="var(--font-mono)" fontSize="6" fill="var(--blueprint)" letterSpacing="0.05em">UMBRAL (CEMSTWO)</text>
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="cta-row">
              <a href={hero.ctaPrimary.href} className="btn-primary">
                {hero.ctaPrimary.label}
              </a>
              <a href={hero.ctaSecondary.href} className="btn-secondary">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>
        </div>
        <RiskPanel />
      </div>
    </section>
  );
}
