import styled from 'styled-components';

/**
 * Shared layout + typographic primitives.
 * Every page composes these so spacing and type scale stay consistent.
 */

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const Prose = styled.div`
  max-width: ${({ theme }) => theme.layout.textWidth};
`;

/** Small letterspaced label, e.g. "Selected work" above a title. */
export const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.1rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Lede = styled.p`
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Rule = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

/** Underlined text link that reveals its rule on hover. */
export const TextLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
  padding-bottom: 1px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

/** Terracotta pill, used sparingly (one primary action per page). */
export const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  padding: 0.85rem 1.9rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }

  &:active {
    transform: translateY(0) scale(0.97);
    box-shadow: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.2s ease, border-color 0.2s ease;

    &:hover,
    &:active {
      transform: none;
    }
  }
`;

/**
 * Round 32px control used by the header switches, so the theme toggle and the
 * burger keep exactly the same footprint next to the language pill.
 */
export const IconButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.bgSurface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  overflow: hidden;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

/** Icon layer for IconButton: absolutely stacked so two icons can cross-fade. */
export const IconLayer = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
`;

/** Same footprint as Button, outlined instead of filled. */
export const GhostButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accentHover};
    box-shadow: ${({ theme }) => theme.shadows.accentSoft};
  }
`;
