import { useI18n } from '../../hooks/useI18n';
import type { ArchetypeTone } from '../../content/site';
import { Reveal } from './Reveal';
import './SimplicityMatrix.css';

const toneClass: Record<ArchetypeTone, string> = {
  neutral: '',
  warning: 'archetype-card--warning',
  critical: 'archetype-card--critical',
  opportunity: 'archetype-card--opportunity',
};

export function SimplicityMatrix() {
  const { content, locale } = useI18n();
  const { simplicityMatrix } = content.complexity;

  return (
    <div className="simplicity-matrix">
      {simplicityMatrix.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.08}>
          <article className={`archetype-card panel ${toneClass[item.tone]}`}>
            <header className="archetype-card__header">
              <span className="archetype-card__id">{item.name}</span>
              <h3>{locale === 'es' ? item.nameEs : item.name}</h3>
            </header>
            <p className="archetype-card__profile">{item.profile}</p>
            <p className="archetype-card__action">
              <strong>{content.ui.action}</strong> {item.action}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
