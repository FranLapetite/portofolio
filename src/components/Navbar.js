import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bgBaseTranslucent};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  min-height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    min-height: 0;
  }
`;

const Logo = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    gap: 0.9rem;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 0.2rem;
  }

  /* Below ~480px the six links can't share one row; cap the width so they
     break into two balanced rows of three instead of a lone trailing link. */
  @media (max-width: 480px) {
    max-width: 14rem;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.35rem 0;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.textPrimary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 768px) {
    font-size: 0.82rem;
  }
`;

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/hobbies', label: 'Interests' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => (
  <HeaderContainer>
    <Inner>
      <Logo to="/" end aria-label="Françoise Lapetite, home">
        Françoise Lapetite
      </Logo>
      <Nav>
        {links.map(({ to, label, end }) => (
          <StyledLink key={to} to={to} end={end}>
            {label}
          </StyledLink>
        ))}
      </Nav>
    </Inner>
  </HeaderContainer>
);

export default Navbar;
