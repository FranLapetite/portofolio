import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Footer = () => (
  <FooterContainer>
    <Inner>
      <Copy>© {new Date().getFullYear()} Françoise Lapetite</Copy>
      <Links>
        <FooterLink href="https://www.linkedin.com/in/fran-lapetite" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/FranLapetite" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
        <FooterLink as={Link} to="/privacy-policy">
          Privacy
        </FooterLink>
        <FooterLink as={Link} to="/fox" aria-label="Fox Den">
          Fox Den
        </FooterLink>
      </Links>
    </Inner>
  </FooterContainer>
);

export default Footer;
