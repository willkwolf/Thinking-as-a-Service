import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './RiskPanel.css';

export function RiskPanel() {
  const { content } = useI18n();
  const { riskPanel } = content.complexity;

  return (
    <Reveal className="risk-panel panel" delay={0.15}>
      <div className="risk-panel__header">
        <span>{riskPanel.label}</span>
        <strong>{riskPanel.title}</strong>
      </div>
      <dl className="risk-panel__metrics">
        {riskPanel.metrics.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd className={m.danger ? 'text-danger' : undefined}>{m.value}</dd>
          </div>
        ))}
      </dl>
      <p className="risk-panel__footnote">{riskPanel.footnote}</p>
    </Reveal>
  );
}
