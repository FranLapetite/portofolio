import React from 'react';
import styled from 'styled-components';
import { LANGUAGES, useLanguage } from '../i18n';

/**
 * Two-segment pill. The active segment is marked by a single slider that
 * translates between halves — plain CSS rather than a shared-layout animation,
 * so it stays cheap and never interacts with the route transitions.
 */
const Switch = styled.div`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.bgSurface};
  line-height: 1;
`;

const Slider = styled.span`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  width: calc(50% - 2px);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.accent};
  transform: translateX(${({ $index }) => $index * 100}%);
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Option = styled.button`
  position: relative;
  z-index: 1;
  min-width: 2.1rem;
  padding: 0.32rem 0.15rem;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.colors.onAccent : theme.colors.textMuted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.colors.onAccent : theme.colors.textPrimary)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

const fullName = { en: 'English', fr: 'Français' };

const LanguageToggle = ({ className }) => {
  const { lang, setLang, t } = useLanguage();
  const activeIndex = Math.max(0, LANGUAGES.indexOf(lang));

  return (
    <Switch className={className} role="group" aria-label={t.nav.languageLabel}>
      <Slider $index={activeIndex} aria-hidden="true" />
      {LANGUAGES.map((code) => (
        <Option
          key={code}
          type="button"
          lang={code}
          $active={code === lang}
          aria-pressed={code === lang}
          title={fullName[code]}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </Option>
      ))}
    </Switch>
  );
};

export default LanguageToggle;
