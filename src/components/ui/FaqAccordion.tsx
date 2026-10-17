import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Reveal } from './Reveal';
import './FaqAccordion.css';

export function FaqAccordion() {
  const { content } = useI18n();
  const { faqs } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" aria-labelledby="faqs-title">
      <div className="faq-section__inner">
        <Reveal>
          <header className="faq-section__header">
            <span className="eyebrow">{faqs.eyebrow}</span>
            <h2 id="faqs-title">{faqs.title}</h2>
            <p>{faqs.lead}</p>
          </header>
        </Reveal>

        <div className="faq-list">
          {faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            const buttonId = `faq-trigger-${idx}`;

            return (
              <Reveal key={idx} delay={idx * 0.06}>
                <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <div className="faq-trigger__content">
                      <span className="faq-trigger__tag">{item.tag}</span>
                      <h3 className="faq-trigger__question">{item.question}</h3>
                    </div>
                    <span className="faq-trigger__icon" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 6 8 10 12 6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={answerId} className="faq-answer" role="region" aria-labelledby={buttonId}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
