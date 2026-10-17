import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './AuthorityBar.css';

export function AuthorityBar() {
  const { content } = useI18n();
  const { authority } = content;

  return (
    <section className="authority-bar" aria-labelledby="authority-title">
      <div className="authority-bar__inner">
        <Reveal>
          <header className="authority-bar__header">
            <span className="eyebrow">{authority.eyebrow}</span>
            <h3 id="authority-title">{authority.title}</h3>
            <p>{authority.lead}</p>
          </header>
        </Reveal>

        <div className="authority-bar__grid">
          {authority.pillars.map((pillar, idx) => (
            <Reveal key={pillar.name} delay={idx * 0.06}>
              <article className="authority-card">
                <span className="authority-card__tag">{pillar.tag}</span>
                <h4 className="authority-card__name">{pillar.name}</h4>
                <p className="authority-card__desc">{pillar.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
