import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './FinalCtaBanner.css';

interface FinalCtaBannerProps {
  onOpenIntake?: () => void;
}

export function FinalCtaBanner({ onOpenIntake }: FinalCtaBannerProps) {
  const { content } = useI18n();
  const { finalCta, playbook, footer } = content;
  const whatsappHref = `${playbook.whatsappBase}?text=${encodeURIComponent(footer.ctaMessage)}`;

  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <Reveal>
        <div className="final-cta-card">
          <div className="final-cta-badge">
            <span className="final-cta-badge__dot" aria-hidden="true" />
            <span>{finalCta.badge}</span>
          </div>

          <h2 id="final-cta-title">{finalCta.title}</h2>
          <p className="lead">{finalCta.lead}</p>

          <div className="final-cta-actions">
            {onOpenIntake && (
              <button
                type="button"
                className="final-cta-btn-primary"
                onClick={onOpenIntake}
              >
                {finalCta.primaryBtn}
              </button>
            )}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.813 1.496 5.405.002 9.8-4.366 9.803-9.75.002-2.606-.992-5.059-2.825-6.895C16.602 2.169 14.153 1.17c-5.398 0-9.789 4.369-9.792 9.75-.002 1.636.447 3.23 1.3 4.673l-1.002 3.655 3.753-.984zM16.9 14.444c-.267-.134-1.582-.78-1.828-.87-.247-.09-.427-.134-.607.134-.18.267-.697.87-.852 1.047-.157.177-.313.2-.58.067-.267-.134-1.127-.415-2.148-1.326-.793-.707-1.329-1.582-1.486-1.85-.157-.267-.017-.411.117-.544.12-.12.267-.313.4-.469.136-.156.18-.267.27-.446.09-.177.043-.334-.02-.469-.063-.134-.607-1.464-.83-2.005-.216-.522-.435-.451-.607-.46l-.517-.01c-.18 0-.472.067-.719.334-.247.267-.944.922-.944 2.25s.967 2.609 1.102 2.787c.134.178 1.9 2.9 4.603 4.07.643.278 1.144.444 1.536.568.647.206 1.233.177 1.697.108.518-.077 1.582-.647 1.806-1.272.225-.625.225-1.16.157-1.272-.068-.113-.248-.18-.515-.313z"/>
              </svg>
              <span>{finalCta.secondaryBtn}</span>
            </a>
          </div>

          <div className="final-cta-pills">
            {finalCta.pills.map((pill, idx) => (
              <span key={idx} className="final-cta-pill">
                <span className="final-cta-pill-icon">✓</span> {pill}
              </span>
            ))}
          </div>

          <div className="final-cta-guarantee">
            <p>
              🛡️ {finalCta.guarantee}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
