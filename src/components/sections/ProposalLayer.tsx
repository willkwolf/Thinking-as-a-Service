import { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Reveal } from '../ui/Reveal';
import './ProposalLayer.css';

interface PackageItem {
  id: string;
  name: string;
  phase: string;
  desc: string;
  partnerHours: number;
  analystHours: number;
  basePrice: number;
  hasRetainer?: boolean;
  retainerPrice?: number;
  targetBuyer: string;
}

export function ProposalLayer() {
  const { content, locale } = useI18n();
  const { pricing } = content;

  // Selected Region: usa, canada, latam
  const [region, setRegion] = useState<'usa' | 'canada' | 'latam'>('usa');
  
  // Selected Package: sondeo, standard, enterprise, custom
  const [selectedPack, setSelectedPack] = useState<string>('standard');

  // Custom Hours (only editable when package is 'custom')
  const [partnerHours, setPartnerHours] = useState<number>(30);
  const [analystHours, setAnalystHours] = useState<number>(100);

  // Copied indicator
  const [copied, setCopied] = useState(false);

  const activeRegion = pricing.regions[region];
  const packagesList = pricing.packages as unknown as PackageItem[];
  const currentPack = packagesList.find((p) => p.id === selectedPack);

  // Sync hours if package changes
  useEffect(() => {
    if (selectedPack !== 'custom' && currentPack) {
      setPartnerHours(currentPack.partnerHours);
      setAnalystHours(currentPack.analystHours);
    }
  }, [selectedPack, currentPack]);

  // Calculate pricing
  const partnerRate = 300;
  const analystRate = 229;
  
  let totalPrice = partnerHours * partnerRate + analystHours * analystRate;
  
  // Apply packaging discounts if standard packages are selected to match the base price
  if (selectedPack === 'sondeo') totalPrice = 9800;
  if (selectedPack === 'standard') totalPrice = 29500;
  if (selectedPack === 'enterprise') totalPrice = 35000;

  // Format price
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Compile Proposal Text
  const getProposalText = () => {
    const packageName = selectedPack === 'custom' 
      ? (locale === 'es' ? 'Configuración Personalizada' : 'Custom Team Configuration')
      : currentPack?.name || '';
      
    const regionName = activeRegion.name;
    const focusTitle = activeRegion.focusTitle;

    if (locale === 'es') {
      return `Hola Dr. Andrés López Astudillo,
He estructurado una propuesta comercial interactiva en su plataforma para la región: ${regionName}.

Paquete Seleccionado: ${packageName}
- Socio Principal / Reality Auditor: ${partnerHours} horas (@$300 USD/hr)
- Delivery Team / Analista de Redes: ${analystHours} horas (@$229 USD/hr)
${selectedPack === 'enterprise' ? `- Retainer de Soporte Mensual: ${formatCurrency(4500)} USD / mes\n` : ''}
Inversión Total Estimada: ${formatCurrency(totalPrice)} USD
Foco estratégico: ${focusTitle}

Me interesa discutir el onboarding de esta exploración remota y sostenible. ¿Cuáles son los siguientes pasos?`;
    } else {
      return `Hello Dr. Andrés López Astudillo,
I have structured a commercial proposal on your platform for the region: ${regionName}.

Selected Package: ${packageName}
- Senior Partner / Reality Auditor: ${partnerHours} hours (@$300 USD/hr)
- Delivery Team / Network Analyst: ${analystHours} hours (@$229 USD/hr)
${selectedPack === 'enterprise' ? `- Monthly Support Retainer: ${formatCurrency(4500)} USD / month\n` : ''}
Estimated Total Investment: ${formatCurrency(totalPrice)} USD
Strategic Focus: ${focusTitle}

I am interested in discussing the onboarding for this remote and sustainable exploration. What are the next steps?`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getProposalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const whatsappHref = `https://wa.me/573108437004?text=${encodeURIComponent(getProposalText())}`;

  return (
    <section id="iceberg-proposal" className="layer layer--proposal" aria-labelledby="proposal-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 id="proposal-title">{pricing.title}</h2>
          <p className="lead">{pricing.lead}</p>
        </Reveal>

        {/* Region Selector */}
        <Reveal delay={0.08}>
          <div className="region-selector-wrapper">
            <span className="region-label">{pricing.regionLabel}</span>
            <div className="chip-row">
              {(['usa', 'canada', 'latam'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`chip ${region === r ? 'chip--active' : ''}`}
                  onClick={() => setRegion(r)}
                >
                  {pricing.regions[r].name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Region Value Proposition Focus */}
        <Reveal delay={0.12}>
          <div className="region-focus-panel panel">
            <h4>{activeRegion.focusTitle}</h4>
            <p>{activeRegion.focusText}</p>
          </div>
        </Reveal>

        <div className="proposal-grid">
          {/* Left Column: Selector and Calculator */}
          <div className="proposal-configurator">
            <Reveal delay={0.16}>
              <h3 className="section-subtitle">{pricing.packageLabel}</h3>
              <div className="package-options">
                {packagesList.map((pack) => {
                  const isActive = selectedPack === pack.id;
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      className={`package-option-card panel ${isActive ? 'package-option-card--active' : ''}`}
                      onClick={() => setSelectedPack(pack.id)}
                    >
                      <div className="pack-header">
                        <h4>{pack.name}</h4>
                        <span className="pack-phase">{pack.phase}</span>
                      </div>
                      <p className="pack-desc">{pack.desc}</p>
                      <div className="pack-footer">
                        <span className="pack-buyer"><strong>{locale === 'es' ? 'Dirigido a:' : 'For:'}</strong> {pack.targetBuyer}</span>
                        <span className="pack-price">
                          {formatCurrency(pack.basePrice)}
                          {pack.hasRetainer && <small> + {formatCurrency(pack.retainerPrice || 0)}/mo</small>}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Custom Option */}
                <button
                  type="button"
                  className={`package-option-card panel ${selectedPack === 'custom' ? 'package-option-card--active' : ''}`}
                  onClick={() => setSelectedPack('custom')}
                >
                  <div className="pack-header">
                    <h4>{pricing.customTitle}</h4>
                    <span className="pack-phase">{locale === 'es' ? 'A la medida' : 'Tailored'}</span>
                  </div>
                  <p className="pack-desc">{pricing.customLead}</p>
                  <div className="pack-footer">
                    <span className="pack-buyer"><strong>{locale === 'es' ? 'Dirigido a:' : 'For:'}</strong> {locale === 'es' ? 'Alcances específicos' : 'Custom scopes'}</span>
                    <span className="pack-price">{locale === 'es' ? 'Variable' : 'Variable'}</span>
                  </div>
                </button>
              </div>
            </Reveal>

            {/* Custom Hours Sliders (Only visible if Custom is selected) */}
            {selectedPack === 'custom' && (
              <Reveal delay={0.1}>
                <div className="custom-hours-sliders panel">
                  <h4>{pricing.customTitle}</h4>
                  
                  {/* Partner Hours */}
                  <div className="slider-group">
                    <div className="slider-header">
                      <label htmlFor="partner-hours-input">{pricing.partnerLabel}</label>
                      <span className="hours-value">{partnerHours} hrs</span>
                    </div>
                    <div className="slider-control">
                      <button 
                        type="button" 
                        onClick={() => setPartnerHours(Math.max(5, partnerHours - 5))}
                        className="btn-counter"
                      >-</button>
                      <input
                        id="partner-hours-input"
                        type="range"
                        min="5"
                        max="120"
                        step="5"
                        value={partnerHours}
                        onChange={(e) => setPartnerHours(Number(e.target.value))}
                      />
                      <button 
                        type="button" 
                        onClick={() => setPartnerHours(Math.min(120, partnerHours + 5))}
                        className="btn-counter"
                      >+</button>
                    </div>
                  </div>

                  {/* Analyst Hours */}
                  <div className="slider-group">
                    <div className="slider-header">
                      <label htmlFor="analyst-hours-input">{pricing.analystLabel}</label>
                      <span className="hours-value">{analystHours} hrs</span>
                    </div>
                    <div className="slider-control">
                      <button 
                        type="button" 
                        onClick={() => setAnalystHours(Math.max(10, analystHours - 10))}
                        className="btn-counter"
                      >-</button>
                      <input
                        id="analyst-hours-input"
                        type="range"
                        min="10"
                        max="300"
                        step="10"
                        value={analystHours}
                        onChange={(e) => setAnalystHours(Number(e.target.value))}
                      />
                      <button 
                        type="button" 
                        onClick={() => setAnalystHours(Math.min(300, analystHours + 10))}
                        className="btn-counter"
                      >+</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Proposal Summary */}
          <div className="proposal-summary-column">
            <Reveal delay={0.22}>
              <div className="proposal-summary-card panel">
                <h3>{pricing.summaryTitle}</h3>
                
                <div className="summary-details">
                  <div className="summary-row">
                    <span>{locale === 'es' ? 'Región:' : 'Region:'}</span>
                    <strong>{activeRegion.name}</strong>
                  </div>
                  <div className="summary-row">
                    <span>{locale === 'es' ? 'Paquete:' : 'Package:'}</span>
                    <strong>{selectedPack === 'custom' ? (locale === 'es' ? 'Personalizado' : 'Custom') : currentPack?.name}</strong>
                  </div>
                  <div className="summary-row">
                    <span>{locale === 'es' ? 'Socio Principal:' : 'Senior Partner:'}</span>
                    <strong>{partnerHours} hrs <small>(@$300/hr)</small></strong>
                  </div>
                  <div className="summary-row">
                    <span>{locale === 'es' ? 'Delivery Team:' : 'Delivery Team:'}</span>
                    <strong>{analystHours} hrs <small>(@$229/hr)</small></strong>
                  </div>
                  {selectedPack === 'enterprise' && (
                    <div className="summary-row retainer-row">
                      <span>{locale === 'es' ? 'Retainer mensual (3m):' : 'Monthly retainer (3m):'}</span>
                      <strong>{formatCurrency(4500)} / {locale === 'es' ? 'mes' : 'mo'}</strong>
                    </div>
                  )}
                </div>

                <div className="summary-pricing">
                  <span>{pricing.summaryTotal}</span>
                  <span className="total-amount">{formatCurrency(totalPrice)} USD</span>
                </div>

                <p className="pricing-note">{pricing.summaryNote}</p>

                <div className="summary-actions">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-whatsapp"
                  >
                    <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.813 1.496 5.405.002 9.8-4.366 9.803-9.75.002-2.606-.992-5.059-2.825-6.895C16.602 2.169 14.153 1.17 11.547 1.17c-5.398 0-9.789 4.369-9.792 9.75-.002 1.636.447 3.23 1.3 4.673l-1.002 3.655 3.753-.984zM16.9 14.444c-.267-.134-1.582-.78-1.828-.87-.247-.09-.427-.134-.607.134-.18.267-.697.87-.852 1.047-.157.177-.313.2-.58.067-.267-.134-1.127-.415-2.148-1.326-.793-.707-1.329-1.582-1.486-1.85-.157-.267-.017-.411.117-.544.12-.12.267-.313.4-.469.136-.156.18-.267.27-.446.09-.177.043-.334-.02-.469-.063-.134-.607-1.464-.83-2.005-.216-.522-.435-.451-.607-.46l-.517-.01c-.18 0-.472.067-.719.334-.247.267-.944.922-.944 2.25s.967 2.609 1.102 2.787c.134.178 1.9 2.9 4.603 4.07.643.278 1.144.444 1.536.568.647.206 1.233.177 1.697.108.518-.077 1.582-.647 1.806-1.272.225-.625.225-1.16.157-1.272-.068-.113-.248-.18-.515-.313z"/>
                    </svg>
                    {pricing.ctaSend}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn-secondary btn-copy"
                  >
                    {copied ? pricing.copySuccess : pricing.copyButton}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
