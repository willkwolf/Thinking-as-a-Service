import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './AudienceFilter.css';

export function AudienceFilter() {
  const { content } = useI18n();
  const { audience } = content;

  return (
    <section className="audience-filter" aria-labelledby="audience-title">
      <div className="audience-filter__inner">
        <Reveal>
          <header className="audience-filter__header">
            <span className="eyebrow">{audience.eyebrow}</span>
            <h2 id="audience-title">{audience.title}</h2>
            <p>{audience.lead}</p>
          </header>
        </Reveal>

        <div className="audience-filter__grid">
          {/* For You */}
          <Reveal delay={0.08}>
            <article className="audience-card audience-card--positive">
              <div className="audience-card__header">
                <span className="audience-card__icon" aria-hidden="true">✔</span>
                <h3 className="audience-card__title">{audience.forYou.title}</h3>
              </div>
              <ul className="audience-card__list">
                {audience.forYou.items.map((item, i) => (
                  <li key={i} className="audience-card__item">
                    <svg className="audience-card__item-bullet" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    <div className="audience-card__item-text">
                      <strong>{item.highlight}</strong>
                      <span>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* NOT For You */}
          <Reveal delay={0.14}>
            <article className="audience-card audience-card--negative">
              <div className="audience-card__header">
                <span className="audience-card__icon" aria-hidden="true">✕</span>
                <h3 className="audience-card__title">{audience.notForYou.title}</h3>
              </div>
              <ul className="audience-card__list">
                {audience.notForYou.items.map((item, i) => (
                  <li key={i} className="audience-card__item">
                    <svg className="audience-card__item-bullet" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <div className="audience-card__item-text">
                      <strong>{item.highlight}</strong>
                      <span>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
