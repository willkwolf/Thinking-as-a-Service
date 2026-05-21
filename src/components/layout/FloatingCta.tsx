import { useEffect, useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './FloatingCta.css';

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const { content } = useI18n();
  const { ui, playbook, footer } = content;
  const href = `${playbook.whatsappBase}?text=${encodeURIComponent(footer.ctaMessage)}`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.45);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      id="floating-cta"
      className={`floating-cta${visible ? ' visible' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {ui.floatingCta}
    </a>
  );
}

