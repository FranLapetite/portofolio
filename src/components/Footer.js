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
  border-top: 1px solid rgba(255, 255, 255, 0.3); /* Add a subtle top border */
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

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links on smaller screens */
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #ffd700;
    text-decoration: underline; /* Add underline effect */
    transform: scale(1.05); /* Slight scaling */
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
        <FooterLink href="/contact">Contact</FooterLink> {/* Ensure this works with React Router */}
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;