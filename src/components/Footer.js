import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: #3a86ff;
  color: white;
  margin-top: auto;
  font-size: 1rem;
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00b2fe;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Françoise Lapetite. All rights reserved.</p>
    <p> This website does not collect personal data.</p>
    <FooterLinks>
      <FooterLink href="https://linkedin.com/in/fran-lapetite" target="_blank">
        LinkedIn
      </FooterLink>
      <FooterLink href="https://github.com/franlapetite" target="_blank">
        GitHub
      </FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;