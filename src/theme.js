/**
 * Two palettes over one shared scale. Components only ever read semantic
 * tokens (bgBase, textPrimary, accent, onAccent…), so nothing has to know
 * which mode is active.
 */
const base = {
  fonts: {
    display: "'Fraunces', Georgia, 'Times New Roman', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  radii: { sm: '2px', md: '4px', lg: '6px', pill: '999px' },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '4rem',
    xxl: '6rem',
  },
  layout: {
    maxWidth: '1080px',
    textWidth: '660px',
    headerHeight: '72px',
  },
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1024px' },
};

export const lightTheme = {
  ...base,
  mode: 'light',
  colors: {
    bgBase: '#FAF8F5',
    bgBaseTranslucent: 'rgba(250, 248, 245, 0.85)',
    bgSurface: '#F4F0EA',
    bgSurfaceAlt: '#EFE9E1',
    border: '#E5E0D8',
    borderStrong: '#D4CCC0',
    textPrimary: '#1A1A1A',
    textSecondary: '#6B6560',
    textMuted: '#948C82',
    accent: '#8B5E4A',
    accentHover: '#6E4737',
    accentSoft: '#F0E6DF',
    accentFox: '#C2703D',
    /** Text drawn on top of an accent fill. */
    onAccent: '#FAF8F5',
    success: '#4A6B4F',
    error: '#8E3B3B',
  },
  shadows: {
    accent: '0 6px 18px rgba(139, 94, 74, 0.24)',
    accentSoft: '0 6px 18px rgba(139, 94, 74, 0.14)',
  },
};

/** Warm near-black rather than grey, so the terracotta identity survives. */
export const darkTheme = {
  ...base,
  mode: 'dark',
  colors: {
    bgBase: '#14120F',
    bgBaseTranslucent: 'rgba(20, 18, 15, 0.85)',
    bgSurface: '#1D1A16',
    bgSurfaceAlt: '#262119',
    border: '#302B24',
    borderStrong: '#4A4238',
    textPrimary: '#F2EDE5',
    textSecondary: '#B5ADA3',
    textMuted: '#8C8479',
    accent: '#D89B7A',
    accentHover: '#EDB392',
    accentSoft: '#2E241D',
    accentFox: '#E08A4E',
    onAccent: '#14120F',
    success: '#8FB394',
    error: '#DE9191',
  },
  shadows: {
    accent: '0 6px 18px rgba(216, 155, 122, 0.26)',
    accentSoft: '0 6px 18px rgba(216, 155, 122, 0.16)',
  },
};

export const themes = { light: lightTheme, dark: darkTheme };

export default lightTheme;
