import { Reveal } from './Reveal';
import './LogoCarousel.css';

/** Set to true when PNG logos are added to public/logos/ */
export const LOGO_CAROUSEL_ENABLED = false;

const MOCK_LOGOS = ['Organización A', 'Organización B', 'Organización C', 'Organización D'];

export function LogoCarousel() {
  return (
    <section className="logo-carousel-section" aria-labelledby="logos-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow eyebrow--muted">Confianza</p>
          <h2 id="logos-title">Organizaciones que confían en nosotros</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className={`logo-carousel panel${LOGO_CAROUSEL_ENABLED ? '' : ' logo-carousel--mock'}`}
            aria-label="Logos de clientes"
            data-enabled={String(LOGO_CAROUSEL_ENABLED)}
          >
            <div className="logo-carousel__track">
              {MOCK_LOGOS.map((name) => (
                <div key={name} className="logo-carousel__item" aria-hidden={!LOGO_CAROUSEL_ENABLED}>
                  <span className="logo-carousel__placeholder">{name.charAt(0)}</span>
                  <span className="logo-carousel__name">{name}</span>
                </div>
              ))}
            </div>
            {!LOGO_CAROUSEL_ENABLED && (
              <p className="logo-carousel__notice">
                Próximamente — añada archivos PNG en <code>public/logos/</code> y active el carrusel.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
