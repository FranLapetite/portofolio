import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  text-align: center;
  padding: 1.5rem 2rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Françoise Lapetite. All rights reserved.</FooterText>
      <FooterLinks>
        <FooterLink href="https://www.linkedin.com/in/fran-lapetite" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/FranLapetite" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;