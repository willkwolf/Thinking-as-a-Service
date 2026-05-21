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
            <h1 id="hero-title">{hero.title}</h1>
            <p className="subcopy">{hero.subcopy}</p>
          </Reveal>
          <Reveal delay={0.08}>
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
