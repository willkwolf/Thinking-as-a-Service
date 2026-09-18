import { useState, useCallback } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './PlaybookCards.css';

export function PlaybookCards() {
  const { content } = useI18n();
  const { playbook } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'step' | 'grid'>('step');
  const total = playbook.items.length;

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextStep();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevStep();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveIndex(total - 1);
    }
  };

  const ctaHref = `${playbook.whatsappBase}?text=${encodeURIComponent(playbook.ctaMessage)}`;

  return (
    <div className="playbook-container" onKeyDown={handleKeyDown}>
      {/* Top Controller: Step Rail & Mode Switcher */}
      <div className="playbook-toolbar">
        <div className="playbook-stepper" role="tablist" aria-label="Pasos del Playbook">
          {playbook.items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-controls={`playbook-panel-${idx}`}
              id={`playbook-tab-${idx}`}
              className={`playbook-step-btn ${activeIndex === idx ? 'playbook-step-btn--active' : ''}`}
              onClick={() => {
                setActiveIndex(idx);
                setViewMode('step');
              }}
            >
              <span className="playbook-step-btn__num">0{idx + 1}</span>
              <span className="playbook-step-btn__label">
                {idx === 0 && 'Filtro'}
                {idx === 1 && 'Estructura'}
                {idx === 2 && 'Playbook'}
                {idx === 3 && 'Fases'}
              </span>
            </button>
          ))}
        </div>

        <div className="playbook-view-toggle">
          <button
            type="button"
            className={`view-mode-btn ${viewMode === 'step' ? 'view-mode-btn--active' : ''}`}
            onClick={() => setViewMode('step')}
            aria-label="Ver paso a paso"
          >
            Secuencia
          </button>
          <button
            type="button"
            className={`view-mode-btn ${viewMode === 'grid' ? 'view-mode-btn--active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Ver todos los pasos"
          >
            Ver todos
          </button>
        </div>
      </div>

      {/* Step View (Carousel Mode) */}
      {viewMode === 'step' ? (
        <div
          className="playbook-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Playbook de Simplificación Operativa"
        >
          <div
            id={`playbook-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`playbook-tab-${activeIndex}`}
            className="playbook-slide"
          >
            <article className="playbook-card playbook-card--carousel">
              <div className="playbook-card__header">
                <span className="playbook-card__index">0{activeIndex + 1}</span>
                <div className="playbook-card__title-group">
                  <span className="playbook-card__badge">Paso 0{activeIndex + 1} de 0{total}</span>
                  <h3>{playbook.items[activeIndex].title}</h3>
                </div>
              </div>

              <div className="playbook-card__body">
                <p className="playbook-card__lead">{playbook.items[activeIndex].summary}</p>

                {playbook.items[activeIndex].children && (
                  <div className="playbook-card__phases">
                    {playbook.items[activeIndex].children.map((child) => (
                      <div key={child.title} className="playbook-card__phase-item">
                        <strong>{child.title}</strong>
                        <p>{child.summary}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Carousel Controls */}
              <div className="playbook-carousel__controls">
                <button
                  type="button"
                  className="playbook-nav-btn"
                  onClick={prevStep}
                  aria-label="Paso anterior"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span>Anterior</span>
                </button>

                <div className="playbook-carousel__dots" aria-hidden="true">
                  {playbook.items.map((_, idx) => (
                    <span
                      key={idx}
                      className={`playbook-carousel__dot ${activeIndex === idx ? 'playbook-carousel__dot--active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="playbook-nav-btn"
                  onClick={nextStep}
                  aria-label="Paso siguiente"
                >
                  <span>Siguiente</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      ) : (
        /* Full Grid View (2x2 matching reference) */
        <div className="playbook-grid-view">
          {playbook.items.map((item, i) => (
            <article key={item.id} className="playbook-card playbook-card--grid">
              <div className="playbook-card__header">
                <span className="playbook-card__index">0{i + 1}</span>
                <div className="playbook-card__title-group">
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div className="playbook-card__body">
                <p className="playbook-card__lead">{item.summary}</p>
                {item.children && (
                  <div className="playbook-card__phases">
                    {item.children.map((child) => (
                      <div key={child.title} className="playbook-card__phase-item">
                        <strong>{child.title}</strong>
                        <p>{child.summary}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Action CTA */}
      <div className="playbook-cards__cta-wrap">
        <a href={ctaHref} className="btn-primary" target="_blank" rel="noopener noreferrer">
          {playbook.ctaLabel}
        </a>
      </div>
    </div>
  );
}

