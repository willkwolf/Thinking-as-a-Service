import { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './DiagnosticIntakeModal.css';

interface DiagnosticIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiagnosticIntakeModal({ isOpen, onClose }: DiagnosticIntakeModalProps) {
  const { content, locale } = useI18n();
  const intake = content.intakeModal;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState<string>(intake.fields.industryOptions[0]);
  const [scale, setScale] = useState<string>(intake.fields.scaleOptions[0]);
  const [region, setRegion] = useState<'USA' | 'Canadá' | 'LATAM'>('USA');
  const [friction, setFriction] = useState<string>(intake.fields.frictionOptions[0]);
  const [notes, setNotes] = useState('');
  const [executiveName, setExecutiveName] = useState('');
  const [executiveRole, setExecutiveRole] = useState('');
  const [executiveEmail, setExecutiveEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setStep(1);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Build Executive Diagnostic Brief
  const generateBrief = () => {
    return locale === 'es'
      ? `*SOLICITUD DE DIAGNÓSTICO DE COMPLEJIDAD (REALITY AUDIT)*
Dr. Andrés López Astudillo,

He estructurado una solicitud de auditoría de realidad en su plataforma:
- *Organización:* ${companyName || 'Confidencial'}
- *Sector:* ${industry}
- *Escala:* ${scale}
- *Región:* ${region}
- *Fricción Sistémica Principal (ISO 30401):* ${friction}
${notes ? `- *Notas Específicas:* ${notes}\n` : ''}- *Líder Ejecutivo:* ${executiveName} (${executiveRole || 'C-Suite'})
- *Email:* ${executiveEmail}
${whatsapp ? `- *WhatsApp de Contacto:* ${whatsapp}\n` : ''}
Solicitamos agendar la sesión inicial de diagnóstico de complejidad y desacoplamiento de interfaces.`
      : `*COMPLEXITY DIAGNOSTIC REQUEST (REALITY AUDIT)*
Dr. Andrés López Astudillo,

I have structured a reality audit request via your platform:
- *Organization:* ${companyName || 'Confidential'}
- *Industry:* ${industry}
- *Scale:* ${scale}
- *Region:* ${region}
- *Primary Structural Friction (ISO 30401):* ${friction}
${notes ? `- *Specific Notes:* ${notes}\n` : ''}- *Executive Leader:* ${executiveName} (${executiveRole || 'C-Suite'})
- *Corporate Email:* ${executiveEmail}
${whatsapp ? `- *Contact WhatsApp:* ${whatsapp}\n` : ''}
We request scheduling the initial reality audit and interface decoupling briefing.`;
  };

  const handleWhatsAppSend = () => {
    const brief = generateBrief();
    const url = `https://wa.me/573108437004?text=${encodeURIComponent(brief)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="intake-modal-backdrop" onClick={onClose}>
      <div
        className="intake-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="intake-modal-title"
      >
        <button
          type="button"
          className="intake-modal-close"
          onClick={onClose}
          aria-label={intake.close}
        >
          &times;
        </button>

        <div className="intake-modal-header">
          <span className="intake-badge">{intake.badge}</span>
          <h2 id="intake-modal-title" className="intake-title">{intake.title}</h2>
          <p className="intake-subtitle">{intake.subtitle}</p>

          {!submitted && (
            <div className="intake-step-bar">
              <div className={`intake-step ${step >= 1 ? 'intake-step--active' : ''}`}>
                <span>1</span> {intake.steps.profile}
              </div>
              <div className={`intake-step ${step >= 2 ? 'intake-step--active' : ''}`}>
                <span>2</span> {intake.steps.friction}
              </div>
              <div className={`intake-step ${step >= 3 ? 'intake-step--active' : ''}`}>
                <span>3</span> {intake.steps.schedule}
              </div>
            </div>
          )}
        </div>

        {submitted ? (
          <div className="intake-confirmation">
            <div className="intake-confirmation-icon">✓</div>
            <h3>{locale === 'es' ? 'Solicitud Estructurada con Éxito' : 'Request Structured Successfully'}</h3>
            <p>
              {locale === 'es'
                ? 'Su brief de diagnóstico de complejidad ha sido generado bajo estándares ISO 30401. El equipo directivo se contactará dentro de las próximas 24 horas hábiles.'
                : 'Your complexity diagnostic brief has been formatted under ISO 30401 standards. Our executive team will follow up within 24 business hours.'}
            </p>
            <button type="button" className="btn-primary" onClick={onClose} style={{ marginTop: '1.5rem' }}>
              {locale === 'es' ? 'Volver al Sitio' : 'Return to Site'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleDirectSubmit} className="intake-form">
            {/* Step 1: Corporate Profile */}
            {step === 1 && (
              <div className="intake-step-content">
                <div className="form-group">
                  <label htmlFor="intake-company">{intake.fields.companyName}</label>
                  <input
                    id="intake-company"
                    type="text"
                    required
                    placeholder={intake.fields.companyPlaceholder}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="intake-industry">{intake.fields.industry}</label>
                    <select
                      id="intake-industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      {intake.fields.industryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="intake-scale">{intake.fields.scale}</label>
                    <select
                      id="intake-scale"
                      value={scale}
                      onChange={(e) => setScale(e.target.value)}
                    >
                      {intake.fields.scaleOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>{intake.fields.region}</label>
                  <div className="chip-row">
                    {(['USA', 'Canadá', 'LATAM'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        className={`chip ${region === r ? 'chip--active' : ''}`}
                        onClick={() => setRegion(r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="intake-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setStep(2)}
                    disabled={!companyName.trim()}
                  >
                    {locale === 'es' ? 'Continuar a Fricción Sistémica →' : 'Continue to Systemic Friction →'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Systemic Friction */}
            {step === 2 && (
              <div className="intake-step-content">
                <div className="form-group">
                  <label htmlFor="intake-friction">{intake.fields.primaryFriction}</label>
                  <div className="friction-radio-group">
                    {intake.fields.frictionOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`friction-radio-label ${friction === opt ? 'friction-radio-label--active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="friction"
                          value={opt}
                          checked={friction === opt}
                          onChange={() => setFriction(opt)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="intake-notes">
                    {locale === 'es' ? 'Contexto adicional de interfaces o procesos críticos (opcional):' : 'Additional context on critical interfaces or processes (optional):'}
                  </label>
                  <textarea
                    id="intake-notes"
                    rows={3}
                    placeholder={locale === 'es' ? 'Ej. Múltiples comités para aprobar integraciones; equipos de ingeniería sobrecargados...' : 'e.g. Excessive committees to approve cross-functional integrations; overloaded engineering teams...'}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="intake-actions-between">
                  <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                    {locale === 'es' ? '← Volver' : '← Back'}
                  </button>
                  <button type="button" className="btn-primary" onClick={() => setStep(3)}>
                    {locale === 'es' ? 'Continuar a Agendamiento →' : 'Continue to Scheduling →'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Direct Scheduling & Contact */}
            {step === 3 && (
              <div className="intake-step-content">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="intake-exec-name">{intake.fields.executiveName}</label>
                    <input
                      id="intake-exec-name"
                      type="text"
                      required
                      placeholder="Ej. Andrés López / Carlos Mendoza"
                      value={executiveName}
                      onChange={(e) => setExecutiveName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="intake-exec-role">{intake.fields.executiveRole}</label>
                    <input
                      id="intake-exec-role"
                      type="text"
                      required
                      placeholder="Ej. CEO / COO / CFO / VP Operations"
                      value={executiveRole}
                      onChange={(e) => setExecutiveRole(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="intake-exec-email">{intake.fields.executiveEmail}</label>
                    <input
                      id="intake-exec-email"
                      type="email"
                      required
                      placeholder="nombre@organizacion.com"
                      value={executiveEmail}
                      onChange={(e) => setExecutiveEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="intake-exec-wa">{intake.fields.whatsapp}</label>
                    <input
                      id="intake-exec-wa"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                </div>

                <p className="intake-privacy-note">{intake.privacyNote}</p>

                <div className="intake-actions-between">
                  <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                    {locale === 'es' ? '← Volver' : '← Back'}
                  </button>
                  <div className="intake-submit-group">
                    <button
                      type="button"
                      className="btn-primary btn-whatsapp"
                      onClick={handleWhatsAppSend}
                      disabled={!executiveName.trim() || !executiveEmail.trim()}
                    >
                      <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.813 1.496 5.405.002 9.8-4.366 9.803-9.75.002-2.606-.992-5.059-2.825-6.895C16.602 2.169 14.153 1.17c-5.398 0-9.789 4.369-9.792 9.75-.002 1.636.447 3.23 1.3 4.673l-1.002 3.655 3.753-.984zM16.9 14.444c-.267-.134-1.582-.78-1.828-.87-.247-.09-.427-.134-.607.134-.18.267-.697.87-.852 1.047-.157.177-.313.2-.58.067-.267-.134-1.127-.415-2.148-1.326-.793-.707-1.329-1.582-1.486-1.85-.157-.267-.017-.411.117-.544.12-.12.267-.313.4-.469.136-.156.18-.267.27-.446.09-.177.043-.334-.02-.469-.063-.134-.607-1.464-.83-2.005-.216-.522-.435-.451-.607-.46l-.517-.01c-.18 0-.472.067-.719.334-.247.267-.944.922-.944 2.25s.967 2.609 1.102 2.787c.134.178 1.9 2.9 4.603 4.07.643.278 1.144.444 1.536.568.647.206 1.233.177 1.697.108.518-.077 1.582-.647 1.806-1.272.225-.625.225-1.16.157-1.272-.068-.113-.248-.18-.515-.313z"/>
                      </svg>
                      {intake.submitWhatsApp}
                    </button>
                    <button
                      type="submit"
                      className="btn-secondary"
                      disabled={!executiveName.trim() || !executiveEmail.trim()}
                    >
                      {intake.submitDirect}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
