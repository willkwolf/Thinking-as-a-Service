import { useI18n } from '../../hooks/useI18n';
import { RiskPanel } from '../ui/RiskPanel';
import { Reveal } from '../ui/Reveal';

export function HeroSurface() {
  const { content, locale } = useI18n();
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
              <svg viewBox="0 0 440 180" className="hero-journey-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama del Viaje del Héroe: del Caos a la Simplicidad">
                {/* Left: Scattered nodes / Entangled network (Noise/Chaos) */}
                <g opacity="0.8">
                  {/* Fine connecting chaotic network lines */}
                  <line x1="40" y1="65" x2="70" y2="35" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="40" y1="65" x2="60" y2="95" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="70" y1="35" x2="100" y2="50" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="60" y1="95" x2="95" y2="105" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="100" y1="50" x2="130" y2="75" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="95" y1="105" x2="130" y2="75" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="130" y1="75" x2="150" y2="40" stroke="var(--line-strong)" strokeWidth="0.85" strokeDasharray="2 1.5" />
                  <line x1="150" y1="40" x2="175" y2="85" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="130" y1="75" x2="175" y2="85" stroke="var(--line-strong)" strokeWidth="0.85" />
                  <line x1="175" y1="85" x2="60" y2="95" stroke="var(--line-strong)" strokeWidth="0.6" strokeDasharray="1 1" />
                  
                  {/* Scattered chaotic nodes */}
                  <circle cx="40" cy="65" r="2.5" fill="var(--muted)" />
                  <circle cx="70" cy="35" r="2.5" fill="var(--muted)" />
                  <circle cx="60" cy="95" r="3.5" fill="var(--danger)" />
                  <circle cx="100" cy="50" r="2.5" fill="var(--muted)" />
                  <circle cx="95" cy="105" r="3.5" fill="var(--danger)" />
                  <circle cx="130" cy="75" r="2.5" fill="var(--muted)" />
                  <circle cx="150" cy="40" r="2.5" fill="var(--muted)" />
                  <circle cx="175" cy="85" r="4" fill="var(--danger)" />
                </g>

                {/* Center: The Sword / Diagnostic Threshold Slice of Reality */}
                <g>
                  {/* Glowing lens / slice of light */}
                  <rect x="210" y="10" width="20" height="125" fill="var(--blueprint)" fillOpacity="0.12" rx="10" />
                  
                  {/* Sword blade / line of light */}
                  <line x1="220" y1="12" x2="220" y2="128" stroke="var(--blueprint)" strokeWidth="2.5" />
                  <polygon points="220,2 224,12 216,12" fill="var(--blueprint)" />
                  
                  {/* Crossguard */}
                  <line x1="208" y1="112" x2="232" y2="112" stroke="var(--blueprint)" strokeWidth="2.5" />
                  
                  {/* Grip & Hilt */}
                  <line x1="220" y1="112" x2="220" y2="126" stroke="var(--blueprint)" strokeWidth="2.5" />
                  <circle cx="220" cy="129" r="3" fill="var(--blueprint)" />
                </g>

                {/* Right: Clean, rising path (Signal/Simplicity) */}
                <g>
                  {/* Main flow line */}
                  <path d="M 220 70 C 270 70, 290 100, 330 65 C 365 30, 380 35, 405 30" stroke="var(--signal)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                  
                  {/* Clean sequenced nodes */}
                  <circle cx="220" cy="70" r="3.5" fill="var(--blueprint)" />
                  <circle cx="330" cy="65" r="3.5" fill="var(--signal)" />
                  <circle cx="405" cy="30" r="5" fill="var(--amber)" />
                  
                  {/* Value shiny star on top of return destination */}
                  <polygon points="405,8 407,13 413,13 408,16 410,22 405,19 400,22 402,16 397,13 403,13" fill="var(--amber)" />
                </g>

                {/* High-Contrast Tufte-Inspired Annotations (Defensively Aligned) */}
                {/* 01 / RUIDO (Centered at x=100) */}
                <text x="100" y="152" textAnchor="middle" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--danger)" letterSpacing="0.05em">
                  {locale === 'es' ? '01 / EL RUIDO' : '01 / THE NOISE'}
                </text>
                <text x="100" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">
                  {locale === 'es' ? 'Complejidad sin mapa' : 'Unmapped Complexity'}
                </text>

                {/* UMBRAL (Centered at x=220) */}
                <text x="220" y="152" textAnchor="middle" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--blueprint)" letterSpacing="0.05em">
                  {locale === 'es' ? 'UMBRAL (CEMSTWO)' : 'THRESHOLD (CEMSTWO)'}
                </text>
                <text x="220" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">
                  {locale === 'es' ? 'Descripción del sistema' : 'System Description'}
                </text>

                {/* 02 / SIMPLICIDAD (Centered at x=340) */}
                <text x="340" y="152" textAnchor="middle" fontFamily="var(--font-display)" fontSize="10.5" fontWeight="700" fill="var(--signal)" letterSpacing="0.05em">
                  {locale === 'es' ? '02 / SIMPLICIDAD' : '02 / SIMPLICITY'}
                </text>
                <text x="340" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">
                  {locale === 'es' ? 'Simplicidad operativa' : 'Operational Simplicity'}
                </text>
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
