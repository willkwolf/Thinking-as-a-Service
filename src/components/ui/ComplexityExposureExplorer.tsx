import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './ComplexityExposureExplorer.css';

interface ComplexityExposureExplorerProps {
  onOpenIntake?: () => void;
}

export function ComplexityExposureExplorer({ onOpenIntake }: ComplexityExposureExplorerProps) {
  const { content, locale } = useI18n();
  const explorer = content.complexity.explorer;

  const [scale, setScale] = useState<'mid' | 'upper' | 'enterprise'>('mid');
  const [latency, setLatency] = useState<'low' | 'medium' | 'high'>('medium');
  const [silos, setSilos] = useState<'few' | 'some' | 'many'>('some');
  const [aiActivity, setAiActivity] = useState<'pilot' | 'scaling' | 'aggressive'>('scaling');

  // Qualitative exposure score calculation (0 to 10 scale)
  const latencyWeight = latency === 'low' ? 1 : latency === 'medium' ? 2.5 : 4;
  const silosWeight = silos === 'few' ? 1 : silos === 'some' ? 2.5 : 3.5;
  const aiWeight = aiActivity === 'pilot' ? 1 : aiActivity === 'scaling' ? 2 : 3;

  const totalScore = latencyWeight + silosWeight + aiWeight;

  const exposureTier: 'moderate' | 'severe' | 'critical' =
    totalScore <= 4.5 ? 'moderate' : totalScore <= 7.5 ? 'severe' : 'critical';

  const tierData = explorer.levels[exposureTier];

  // Inertia days calculation
  const inertiaDays = latency === 'low' ? '10 – 14' : latency === 'medium' ? '25 – 35' : '50 – 75+';

  // Knowledge debt assessment (ISO 30401)
  const knowledgeDebtTag =
    silos === 'few'
      ? (locale === 'es' ? 'Baja · Flujos Coordinados' : 'Low · Coordinated Flows')
      : silos === 'some'
      ? (locale === 'es' ? 'Moderada · Silos Departamentales' : 'Moderate · Departmental Silos')
      : (locale === 'es' ? 'Crítica · Puntos Únicos de Falla (SPOF)' : 'Critical · Single Points of Failure (SPOF)');

  // AI amplification danger
  const aiDangerTag =
    aiActivity === 'pilot'
      ? (locale === 'es' ? 'Controlado · Foco Exploratorio' : 'Controlled · Exploratory Focus')
      : aiActivity === 'scaling'
      ? (locale === 'es' ? 'Riesgo Alto · Automatizando Incoherencia' : 'High Risk · Automating Incoherence')
      : (locale === 'es' ? 'Crítico · Amplificación Masiva de Caos' : 'Critical · Massive Chaos Amplification');

  const handleAction = () => {
    if (onOpenIntake) {
      onOpenIntake();
    } else {
      const proposalEl = document.getElementById('iceberg-proposal');
      if (proposalEl) {
        proposalEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="complexity-explorer panel" aria-label={explorer.title}>
      <div className="complexity-explorer__header">
        <p className="eyebrow">{explorer.eyebrow}</p>
        <h3 className="complexity-explorer__title">{explorer.title}</h3>
        <p className="complexity-explorer__lead">{explorer.lead}</p>
      </div>

      <div className="complexity-explorer__grid">
        {/* Controls Column */}
        <div className="complexity-explorer__controls">
          {/* Factor 1: Scale */}
          <div className="explorer-control-group">
            <label className="explorer-control-group__label">{explorer.scaleLabel}</label>
            <div className="explorer-chip-group">
              {explorer.scaleOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`explorer-chip ${scale === opt.value ? 'explorer-chip--active' : ''}`}
                  onClick={() => setScale(opt.value as typeof scale)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Factor 2: Latency */}
          <div className="explorer-control-group">
            <label className="explorer-control-group__label">{explorer.latencyLabel}</label>
            <div className="explorer-chip-group">
              {explorer.latencyOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`explorer-chip ${latency === opt.value ? 'explorer-chip--active' : ''}`}
                  onClick={() => setLatency(opt.value as typeof latency)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Factor 3: Silos */}
          <div className="explorer-control-group">
            <label className="explorer-control-group__label">{explorer.silosLabel}</label>
            <div className="explorer-chip-group">
              {explorer.silosOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`explorer-chip ${silos === opt.value ? 'explorer-chip--active' : ''}`}
                  onClick={() => setSilos(opt.value as typeof silos)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Factor 4: AI Initiatives */}
          <div className="explorer-control-group">
            <label className="explorer-control-group__label">{explorer.aiLabel}</label>
            <div className="explorer-chip-group">
              {explorer.aiOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`explorer-chip ${aiActivity === opt.value ? 'explorer-chip--active' : ''}`}
                  onClick={() => setAiActivity(opt.value as typeof aiActivity)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Diagnostics Column */}
        <div className="complexity-explorer__results">
          <div className={`explorer-results-card explorer-results-card--${exposureTier}`}>
            <div className="explorer-results-card__header">
              <span className="explorer-badge">{explorer.exposureLevelLabel}</span>
              <h4 className="explorer-tier-title">{tierData.title}</h4>
            </div>

            <p className="explorer-tier-desc">{tierData.description}</p>

            <div className="explorer-metrics-grid">
              <div className="explorer-metric">
                <span className="explorer-metric__label">{explorer.latencyImpactLabel}</span>
                <span className="explorer-metric__val">{inertiaDays} {locale === 'es' ? 'días' : 'days'}</span>
              </div>
              <div className="explorer-metric">
                <span className="explorer-metric__label">{explorer.knowledgeDebtLabel}</span>
                <span className="explorer-metric__val explorer-metric__val--danger">{knowledgeDebtTag}</span>
              </div>
              <div className="explorer-metric">
                <span className="explorer-metric__label">{explorer.costOfInactionLabel}</span>
                <span className="explorer-metric__val explorer-metric__val--highlight">~10.2% EBITDA</span>
              </div>
              <div className="explorer-metric">
                <span className="explorer-metric__label">{locale === 'es' ? 'Impacto IA:' : 'AI Impact:'}</span>
                <span className="explorer-metric__val">{aiDangerTag}</span>
              </div>
            </div>

            <div className="explorer-recommendation">
              <strong>{locale === 'es' ? 'Recomendación Sistémica:' : 'Systemic Recommendation:'}</strong>
              <p>{tierData.recommendation}</p>
            </div>

            <p className="explorer-footnote">{explorer.costOfInactionNote}</p>

            <button
              type="button"
              className="btn-primary explorer-cta-btn"
              onClick={handleAction}
            >
              {explorer.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
