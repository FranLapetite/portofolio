import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #3a86ff;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
`;

/* Logo */
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00b2fe;
  }
`;

/* Navigation */
const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    background: #3a86ff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
    text-align: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

/* Menu Links */
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00b2fe;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    display: block;
    padding: 0.8rem 0; /* Adjusted padding for better spacing */
  }
`;

/* Burger Menu Button */
const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    color: white;
  }
`;

/* Mobile Menu Wrapper */
const MobileMenu = styled.div`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    background: #3a86ff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
    text-align: center;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo to="/">Françoise Lapetite</Logo>

      {/* Burger Menu Icon */}
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen}>
        <Nav isOpen={menuOpen}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experiences</NavLink>
          <NavLink to="/hobbies" onClick={() => setMenuOpen(false)}>Hobbies</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </Nav>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;