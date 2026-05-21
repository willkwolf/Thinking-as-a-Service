import { useEffect, useState } from 'react';
import { resolveLocale, siteContent } from '../content/site';
import type { Locale } from '../content/site';

export function useI18n() {
  const [locale, setLocale] = useState<Locale>(() => resolveLocale());
  const content = siteContent[locale];

  useEffect(() => {
    const applyMetadata = (nextLocale: Locale) => {
      const nextContent = siteContent[nextLocale];
      document.documentElement.lang = nextLocale;
      document.title = nextContent.metadata.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', nextContent.metadata.description);
    };

    applyMetadata(locale);

    const onLanguageChange = () => {
      const nextLocale = resolveLocale();
      setLocale(nextLocale);
      applyMetadata(nextLocale);
    };

    window.addEventListener('languagechange', onLanguageChange);
    return () => window.removeEventListener('languagechange', onLanguageChange);
  }, [locale]);

  return { locale, setLocale, content };
}
