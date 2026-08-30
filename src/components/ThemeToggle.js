import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IconButton, IconLayer } from './primitives';
import { useThemeMode } from '../ThemeMode';
import { useLanguage } from '../i18n';

/** The two icons cross-fade with a quarter turn rather than swapping hard. */
const Icon = styled(IconLayer).attrs({ as: motion.span })``;

const ThemeToggle = ({ className }) => {
  const { mode, toggleMode } = useThemeMode();
  const { t } = useLanguage();

  const isDark = mode === 'dark';
  const label = isDark ? t.nav.themeToLight : t.nav.themeToDark;

  return (
    <IconButton
      className={className}
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      <AnimatePresence initial={false} mode="wait">
        <Icon
          key={mode}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </Icon>
      </AnimatePresence>
    </IconButton>
  );
};

export default ThemeToggle;
