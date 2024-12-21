import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  max-width: 700px;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const Button = styled.a`
  background-color: #fff;
  color: #4facfe;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const LinkButton = styled(Link)`
  background-color: #fff;
  color: #4facfe;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Hero = () => (
  <HeroContainer>
    <Name>Françoise Lapetite</Name>
    <Title>Computer Science Engineer</Title>
    <Bio>
      Passionate about creating efficient and innovative solutions in programming and 
      problem-solving. With experiences in Brazil, Canada, and France, I thrive in 
      diverse, challenging environments. Skilled in C++, Python, and Rust, 
      I'm ready to bring creativity and adaptability to every project.
    </Bio>
    <ButtonContainer>
      <Button href="/CV_2024_Francoise_Lapetite.pdf" download>Download CV</Button>
      <LinkButton to="/contact">Contact Me</LinkButton> {/* Use Link for navigation */}
    </ButtonContainer>
  </HeroContainer>
);

export default Hero;