import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Keyframes for soft fade-in animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #dff6ff, #a6ddf0); /* Updated Baby Blue Gradient */
  color: #333;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    height: auto;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #ff6b6b;
  animation: ${fadeIn} 1s ease-out;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  color:rgb(39, 28, 255);
  font-style: italic;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1.2s ease-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3a86ff;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  line-height: 1.6;
  color: #555;
  animation: ${fadeIn} 2s ease-out;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${fadeIn} 2.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  background: linear-gradient(135deg, #ff6b6b, #ff9f1c);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const LinkButton = styled(Link)`
  background: linear-gradient(135deg, #3a86ff, #00b2fe);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  font-size: 1.8rem;
  color: #555;

  a {
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #3a86ff;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => (
  <HeroContainer>
    <Name>Françoise Lapetite</Name>
    <Tagline>"Cyber, Creativity, and Code. 🌍💡"</Tagline>
    <Title>Cybersecurity & Software Engineer</Title>
    <Bio>
      French-Brazilian engineer with global experience in <strong>France, Canada, and Brazil</strong>.  
      Passionate about <strong>cybersecurity, AI, and system design</strong>, I love tackling complex challenges  
      while blending creativity and logic. Let’s build something amazing together! 🚀✨
    </Bio>

    <ButtonContainer>
      <Button href="/CV-Francoise-Lapetite-2025.pdf" download>
        📄 Download CV
      </Button>
      <LinkButton to="/contact">📬 Contact Me</LinkButton>
    </ButtonContainer>

    <SocialLinks>
      <a href="https://github.com/FranLapetite" target="_blank" rel="noopener noreferrer">
        <FaGithub title="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/fran-lapetite" target="_blank" rel="noopener noreferrer">
        <FaLinkedin title="LinkedIn" />
      </a>
      <a href="mailto:fran.lapetite@gmail.com">
        <FaEnvelope title="Email" />
      </a>
    </SocialLinks>
  </HeroContainer>
);

export default Hero;