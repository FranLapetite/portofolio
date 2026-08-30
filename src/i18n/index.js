import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './en';
import fr from './fr';

const dictionaries = { en, fr };

export const LANGUAGES = ['en', 'fr'];

const STORAGE_KEY = 'fl-lang';

/**
 * Resolution order: an explicit choice stored from a previous visit, then the
 * browser's preferred language, then English.
 */
const detectLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    // Private mode or blocked storage: fall through to the browser preference.
  }

  const preferred = window.navigator.languages || [window.navigator.language];
  const match = (preferred || []).find((tag) =>
    LANGUAGES.includes(String(tag).slice(0, 2).toLowerCase())
  );

  return match ? String(match).slice(0, 2).toLowerCase() : 'en';
};

const LanguageContext = createContext({ lang: 'en', t: en, setLang: () => {}, toggleLang: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectLanguage);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting the choice is a nicety, not a requirement.
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  }, [lang, setLang]);

  const t = dictionaries[lang] || en;

  /* Keep the document itself in sync: screen readers and search engines both
     read the lang attribute, and the tab title should follow the toggle. */
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, setLang, toggleLang }), [lang, t, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

/**
 * Renders `**bold**` spans inside a translated string as <strong>, so the
 * dictionaries stay readable instead of being split into fragments.
 */
export const Rich = ({ text }) => (
  <>
    {String(text)
      .split(/(\*\*[^*]+\*\*)/g)
      .filter(Boolean)
      .map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
  </>
);
