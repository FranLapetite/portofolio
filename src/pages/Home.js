import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
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
  background: linear-gradient(to bottom, #e3f8ff, #f6fbff); /* Bleu pastel bébé */
  color: #333;
  text-align: center;
  padding: 2rem;
`;

const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  color: #4facfe; /* Bright blue for focus */
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
  color: #00b2fe; /* Light blue accent */
  animation: ${fadeIn} 1.5s ease-out;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  max-width: 700px;
  line-height: 1.6;
  color: #555;
  animation: ${fadeIn} 2s ease-out;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  animation: ${fadeIn} 2.5s ease-out;
`;

const Button = styled.a`
  background: linear-gradient(135deg, #4facfe, #00b2fe);
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
`;

const LinkButton = styled(Link)`
  background: linear-gradient(135deg, #4facfe, #00b2fe);
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
`;

const Hero = () => (
  <HeroContainer>
    <Name>Françoise Lapetite</Name>
    <Title>Computer Science Engineer</Title>
    <Bio>
      I am passionate about crafting efficient and innovative solutions in programming 
      and problem-solving. With professional experiences in Brazil, Canada, and France, 
      I thrive in diverse, challenging environments. Skilled in C++, Python, and React, 
      I bring creativity and adaptability to every project I work on.
    </Bio>
    <ButtonContainer>
      <Button href="/CV_2024_Francoise_Lapetite.pdf" download>Download CV</Button>
      <LinkButton to="/contact">Contact Me</LinkButton>
    </ButtonContainer>
  </HeroContainer>
);

export default Hero;