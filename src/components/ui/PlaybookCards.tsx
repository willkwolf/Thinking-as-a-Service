import { useState } from 'react';
import { playbook, playbookItems } from '../../content/playbook';
import { Reveal } from './Reveal';
import './PlaybookCards.css';

export function PlaybookCards() {
  const [expanded, setExpanded] = useState<string | null>('reduction');
  const ctaHref = `${playbook.whatsappBase}?text=${encodeURIComponent(playbook.ctaMessage)}`;

  return (
    <div className="playbook-cards">
      {playbookItems.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.1}>
          <article
            className={`playbook-card panel${expanded === item.id ? ' playbook-card--open' : ''}`}
          >
            <button
              type="button"
              className="playbook-card__toggle"
              aria-expanded={expanded === item.id}
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
            >
              <span className="playbook-card__index">0{i + 1}</span>
              <div className="playbook-card__head">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="playbook-card__chevron" aria-hidden />
            </button>
            {item.children && expanded === item.id && (
              <ul className="playbook-card__children">
                {item.children.map((child) => (
                  <li key={child.title}>
                    <strong>{child.title}</strong>
                    <p>{child.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </Reveal>
      ))}
      <Reveal delay={0.25}>
        <a href={ctaHref} className="btn-primary playbook-cards__cta" target="_blank" rel="noopener noreferrer">
          Solicitar el Playbook
        </a>
      </Reveal>
    </div>
  );
}
