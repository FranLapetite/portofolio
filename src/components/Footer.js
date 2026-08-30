import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../i18n';

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

const Copy = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};

  /* Shares its line with the switches on mobile; a touch smaller on the
     narrowest phones so it does not wrap onto two lines beside them. */
  @media (max-width: 360px) {
    font-size: 0.74rem;
  }
`;

/**
 * On mobile this pairs the copyright with the switches on one line, the
 * switches pushed to the right edge. On desktop it dissolves so its children
 * take part in Inner's own layout directly.
 */
const TopRow = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterLink = styled.a`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

/**
 * Mobile only. On desktop the same two switches sit in the header, where they
 * are always in view; on mobile they are behind the burger, so the foot of the
 * page gives a second, scroll-to reach for them.
 */
const Controls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }
`;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <FooterContainer>
      <Inner>
        <TopRow>
          <Copy>© {new Date().getFullYear()} Françoise Lapetite</Copy>
          <Controls>
            <ThemeToggle />
            <LanguageToggle />
          </Controls>
        </TopRow>

        <Links>
          <FooterLink href="https://www.linkedin.com/in/fran-lapetite" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/FranLapetite" target="_blank" rel="noopener noreferrer">
            GitHub
          </FooterLink>
          <FooterLink as={Link} to="/privacy-policy">
            {t.footer.privacy}
          </FooterLink>
          <FooterLink as={Link} to="/fox" aria-label={t.fox.title}>
            {t.footer.foxDen}
          </FooterLink>
        </Links>
      </Inner>
    </FooterContainer>
  );
};

export default Footer;
