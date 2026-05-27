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
              <svg viewBox="0 0 400 180" className="hero-journey-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama del Viaje del Héroe: del Caos a la Simplicidad">
                {/* Left: Scattered nodes / Entangled network (Noise/Chaos) */}
                <g opacity="0.8">
                  {/* Fine connecting chaotic network lines */}
                  <line x1="30" y1="60" x2="50" y2="35" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="30" y1="60" x2="45" y2="90" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="50" y1="35" x2="75" y2="50" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="45" y1="90" x2="70" y2="95" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="75" y1="50" x2="95" y2="70" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="70" y1="95" x2="95" y2="70" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="95" y1="70" x2="110" y2="40" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="110" y1="40" x2="130" y2="80" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="95" y1="70" x2="130" y2="80" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="130" y1="80" x2="45" y2="90" stroke="var(--line-strong)" strokeWidth="0.6" strokeDasharray="1 1" />
                  
                  {/* Scattered chaotic nodes */}
                  <circle cx="30" cy="60" r="2.5" fill="var(--muted)" />
                  <circle cx="50" cy="35" r="2.5" fill="var(--muted)" />
                  <circle cx="45" cy="90" r="3.5" fill="var(--danger)" />
                  <circle cx="75" cy="50" r="2.5" fill="var(--muted)" />
                  <circle cx="70" cy="95" r="3.5" fill="var(--danger)" />
                  <circle cx="95" cy="70" r="2.5" fill="var(--muted)" />
                  <circle cx="110" cy="40" r="2.5" fill="var(--muted)" />
                  <circle cx="130" cy="80" r="4" fill="var(--danger)" />
                </g>

                {/* Center: The Sword / Diagnostic Threshold Slice of Reality */}
                <g>
                  {/* Glowing lens / slice of light */}
                  <rect x="150" y="10" width="20" height="125" fill="var(--blueprint)" fillOpacity="0.12" rx="10" />
                  
                  {/* Sword blade / line of light */}
                  <line x1="160" y1="12" x2="160" y2="128" stroke="var(--blueprint)" strokeWidth="2.5" />
                  <polygon points="160,2 164,12 156,12" fill="var(--blueprint)" />
                  
                  {/* Crossguard */}
                  <line x1="148" y1="112" x2="172" y2="112" stroke="var(--blueprint)" strokeWidth="2.5" />
                  
                  {/* Grip & Hilt */}
                  <line x1="160" y1="112" x2="160" y2="126" stroke="var(--blueprint)" strokeWidth="2.5" />
                  <circle cx="160" cy="129" r="3" fill="var(--blueprint)" />
                </g>

                {/* Right: Clean, rising path (Signal/Simplicity) */}
                <g>
                  {/* Main flow line */}
                  <path d="M 160 70 C 210 70, 240 100, 280 65 C 315 30, 340 35, 370 30" stroke="var(--signal)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                  
                  {/* Clean sequenced nodes */}
                  <circle cx="160" cy="70" r="3.5" fill="var(--blueprint)" />
                  <circle cx="280" cy="65" r="3.5" fill="var(--signal)" />
                  <circle cx="370" cy="30" r="5" fill="var(--amber)" />
                  
                  {/* Value shiny star on top of return destination */}
                  <polygon points="370,8 372,13 378,13 373,16 375,22 370,19 365,22 367,16 362,13 368,13" fill="var(--amber)" />
                </g>

                {/* High-Contrast Tufte-Inspired Annotations */}
                {/* 01 / RUIDO */}
                <text x="25" y="152" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--danger)" letterSpacing="0.05em">01 / EL RUIDO</text>
                <text x="25" y="165" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">Silos y caos no mapeado</text>

                {/* UMBRAL */}
                <text x="160" y="152" textAnchor="middle" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--blueprint)" letterSpacing="0.05em">UMBRAL (CEMSTWO)</text>
                <text x="160" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">Filtro de claridad causal</text>

                {/* 02 / SIMPLICIDAD */}
                <text x="375" y="152" textAnchor="end" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--signal)" letterSpacing="0.05em">02 / SIMPLICIDAD</text>
                <text x="375" y="165" textAnchor="end" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">Procesos listos para IA</text>
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
