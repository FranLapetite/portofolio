const theme = {
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
    success: '#4A6B4F',
    error: '#8E3B3B',
  },
  fonts: {
    display: "'Fraunces', Georgia, 'Times New Roman', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  radii: { sm: '2px', md: '4px', lg: '6px', pill: '999px' },
  shadows: {
    accent: '0 6px 18px rgba(139, 94, 74, 0.24)',
    accentSoft: '0 6px 18px rgba(139, 94, 74, 0.14)',
  },
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

export default theme;
