import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#ffd700' : 'white')};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <NavbarContainer ref={navRef}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>Françoise Lapetite</Logo>
      </Link>

      {/* Hamburger Menu */}
      <Hamburger onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      {/* Navigation Links */}
      <NavList isOpen={isOpen} aria-hidden={!isOpen}>
        <NavItem>
          <StyledLink
            to="/"
            isActive={location.pathname === '/'}
            onClick={() => setIsOpen(false)}
          >
            Home
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/about"
            isActive={location.pathname === '/about'}
            onClick={() => setIsOpen(false)}
          >
            About
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/projects"
            isActive={location.pathname === '/projects'}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/experience"
            isActive={location.pathname === '/experience'}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/hobbies"
            isActive={location.pathname === '/hobbies'}
            onClick={() => setIsOpen(false)}
          >
            Hobbies
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/contact"
            isActive={location.pathname === '/contact'}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;