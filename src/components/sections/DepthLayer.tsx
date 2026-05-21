import { useI18n } from '../../hooks/useI18n';
import { KumuEmbed } from '../ui/KumuEmbed';
import { LogoCarousel } from '../ui/LogoCarousel';
import { Reveal } from '../ui/Reveal';

export function DepthLayer() {
  const { content } = useI18n();
  const { megatrends, caseStudy, footer, playbook } = content;
  const ctaHref = `${playbook.whatsappBase}?text=${encodeURIComponent(footer.ctaMessage)}`;

  return (
    <>
      <section id="iceberg-depth" className="layer layer--depth" aria-labelledby="megatrends-title">
        <div className="content-wrapper">
          <Reveal>
            <p className="eyebrow">{megatrends.eyebrow}</p>
            <h2 id="megatrends-title">{megatrends.title}</h2>
            <p className="lead">{megatrends.lead}</p>
          </Reveal>
          <KumuEmbed title={megatrends.embedTitle} src={megatrends.embedUrl} />

          <Reveal delay={0.12}>
            <p className="eyebrow eyebrow--muted" style={{ marginTop: '3.5rem' }}>
              {caseStudy.eyebrow}
            </p>
            <h2>{caseStudy.title}</h2>
            <p className="lead">{caseStudy.lead}</p>
            <p>{caseStudy.description}</p>
          </Reveal>
          <KumuEmbed title={caseStudy.embedTitle} src={caseStudy.embedUrl} />
        </div>
      </section>

      <LogoCarousel />

      <footer className="layer footer-layer" aria-labelledby="closing-title">
        <div className="content-wrapper closing-panel panel">
          <Reveal>
            <p className="eyebrow">{footer.eyebrow}</p>
            <h2 id="closing-title">{footer.title}</h2>
            <p className="lead">{footer.lead}</p>
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

