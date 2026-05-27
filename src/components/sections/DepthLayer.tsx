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

        {/* Structured High-Ticket Footer */}
        <div className="content-wrapper">
          <div className="footer-grid">
            <Reveal delay={0.1}>
              <div className="footer-col">
                <h4>Thinking as a Service</h4>
                <p style={{ margin: 0 }}>
                  {locale === 'es'
                    ? 'Auditorías de realidad operativa y modelado de complejidad sistémica para corporaciones industriales y organizaciones complejas.'
                    : 'Audits of operational reality and systems complexity modeling for industrial corporations and complex organizations.'}
                </p>
                <div className="privacy-seal" style={{ marginTop: '0.5rem' }}>
                  <span className="privacy-seal__badge">
                    {locale === 'es' ? 'Cero Cookies · Sin Rastreo' : 'Zero Cookies · Zero Tracking'}
                  </span>
                  <p className="privacy-seal__text">
                    {locale === 'es'
                      ? 'Exploración 100% segura y confidencial.'
                      : '100% secure and confidential exploration.'}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="footer-col">
                <h4>{locale === 'es' ? 'Profundidad' : 'Depth Layers'}</h4>
                <ul className="footer-links">
                  {content.icebergLayers.map((layer) => (
                    <li key={layer.id}>
                      <a href={`#iceberg-${layer.id}`}>{layer.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="footer-col">
                <h4>{locale === 'es' ? 'Marco Legal (GitHub)' : 'Legal Framework'}</h4>
                <ul className="footer-links">
                  <li>
                    <a href="https://github.com/willkwolf/Thinking-as-a-Service/blob/main/legal/README.md" target="_blank" rel="noopener noreferrer">
                      ⚖️ {locale === 'es' ? 'Índice Legal' : 'Legal Index'}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/willkwolf/Thinking-as-a-Service/blob/main/legal/derechos-de-autor.md" target="_blank" rel="noopener noreferrer">
                      © {locale === 'es' ? 'Derechos de Autor' : 'Copyright Notice'}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/willkwolf/Thinking-as-a-Service/blob/main/legal/exoneracion-responsabilidad.md" target="_blank" rel="noopener noreferrer">
                      ⚠️ {locale === 'es' ? 'Exoneración Legal' : 'Liability Exoneration'}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/willkwolf/Thinking-as-a-Service/blob/main/legal/privacidad.md" target="_blank" rel="noopener noreferrer">
                      🔒 {locale === 'es' ? 'Privacidad Absoluta' : 'Absolute Privacy'}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/willkwolf/Thinking-as-a-Service/blob/main/legal/terminos.md" target="_blank" rel="noopener noreferrer">
                      💼 {locale === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="sub-footer">
            <span>© 2026 Nosotros. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
            <span>Thinking as a Service &middot; {locale === 'es' ? 'Simplicidad de Alta Dirección' : 'Executive Simplicity'}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
