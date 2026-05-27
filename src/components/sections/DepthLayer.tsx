import { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { KumuEmbed } from '../ui/KumuEmbed';
import { Reveal } from '../ui/Reveal';

interface MobileFallbackProps {
  title: string;
  desc: string;
  activeLocale: 'es' | 'en';
}

function MobileKumuFallback({ title, desc, activeLocale }: MobileFallbackProps) {
  return (
    <Reveal>
      <div className="kumu-mobile-fallback panel" style={{ marginTop: '1.5rem', overflow: 'hidden' }}>
        <header className="kumu-embed__header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.9rem 1.25rem',
          borderBottom: '1px solid var(--line)',
          background: 'var(--bg)'
        }}>
          <div className="kumu-embed__title-group" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="kumu-embed__status-dot" style={{
              width: '6px',
              height: '6px',
              background: 'var(--amber)',
              borderRadius: '50%',
              boxShadow: '0 0 8px var(--amber)'
            }} />
            <span className="kumu-embed__title" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--line-strong)'
            }}>{title}</span>
          </div>
          <span className="kumu-embed__telemetry" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--blueprint)',
            letterSpacing: '0.08em'
          }}>MOBILE_CONSOLE</span>
        </header>
        <div className="kumu-mobile-fallback__body" style={{ padding: '1.5rem', background: 'var(--panel-solid)' }}>
          <p className="fallback-warning" style={{
            fontSize: '0.85rem',
            color: 'var(--muted)',
            lineHeight: 1.5,
            marginBottom: '1rem',
            fontWeight: 300
          }}>
            {activeLocale === 'es'
              ? 'El mapa de red interactivo completo requiere una pantalla de escritorio para su exploración óptima debido a su alta densidad de datos.'
              : 'The complete interactive network map requires a desktop screen for optimal exploration due to its high data density.'}
          </p>
          <div className="fallback-highlights" style={{
            padding: '1rem',
            background: 'rgba(176, 141, 62, 0.03)',
            borderLeft: '2.5px solid var(--blueprint)',
            borderRadius: '0 2px 2px 0'
          }}>
            <span className="fallback-badge" style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--blueprint)',
              letterSpacing: '0.05em',
              marginBottom: '0.35rem'
            }}>
              {activeLocale === 'es' ? 'Resumen de Evidencia Estructural' : 'Structural Evidence Summary'}
            </span>
            <p className="fallback-desc" style={{
              margin: 0,
              fontSize: '0.88rem',
              lineHeight: 1.5,
              color: 'var(--ink)',
              fontWeight: 400
            }}>{desc}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function DepthLayer() {
  const { content, locale } = useI18n();
  const { megatrends, caseStudy, footer, playbook } = content;
  const ctaHref = `${playbook.whatsappBase}?text=${encodeURIComponent(footer.ctaMessage)}`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section id="iceberg-depth" className="layer layer--depth" aria-labelledby="megatrends-title">
        <div className="content-wrapper">
          <Reveal>
            <p className="eyebrow">{megatrends.eyebrow}</p>
            <h2 id="megatrends-title">{megatrends.title}</h2>
            <p className="lead">{megatrends.lead}</p>
          </Reveal>
          {isMobile ? (
            <MobileKumuFallback
              title={megatrends.embedTitle}
              desc={megatrends.lead}
              activeLocale={locale}
            />
          ) : (
            <KumuEmbed title={megatrends.embedTitle} src={megatrends.embedUrl} />
          )}

          <Reveal delay={0.12}>
            <p className="eyebrow eyebrow--muted" style={{ marginTop: '3.5rem' }}>
              {caseStudy.eyebrow}
            </p>
            <h2>{caseStudy.title}</h2>
            <p className="lead">{caseStudy.lead}</p>
            <p style={{ fontWeight: 300, color: 'var(--muted)' }}>{caseStudy.description}</p>
          </Reveal>
          {isMobile ? (
            <MobileKumuFallback
              title={caseStudy.embedTitle}
              desc={caseStudy.description}
              activeLocale={locale}
            />
          ) : (
            <KumuEmbed title={caseStudy.embedTitle} src={caseStudy.embedUrl} />
          )}
        </div>
      </section>

      <footer className="layer footer-layer" aria-labelledby="closing-title">
        <div className="content-wrapper closing-panel panel" style={{ borderRadius: 'var(--radius)' }}>
          <Reveal>
            <p className="eyebrow">{footer.eyebrow}</p>
            <h2 id="closing-title" style={{ fontStyle: 'italic', fontWeight: 300 }}>{footer.title}</h2>
            <p className="lead" style={{ fontWeight: 300, opacity: 0.95 }}>{footer.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-row">
              <a href={ctaHref} className="btn-primary" target="_blank" rel="noopener noreferrer">
                {footer.ctaLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
