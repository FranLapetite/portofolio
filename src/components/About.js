import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SkillBadge = styled.span`
  background: #4facfe;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// About Component
const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Bio>
        Hi, I'm Françoise Lapetite, a Computer Science Engineer currently pursuing an 
        apprenticeship at EPITA Engineering School in Paris. With a passion for programming 
        and problem-solving, I enjoy creating efficient and innovative solutions. My diverse 
        international experiences in Brazil, Canada, and France have shaped me into an 
        adaptable and open-minded individual.
      </Bio>
      <Skills>
        <SkillBadge>C++ </SkillBadge>
        <SkillBadge>Python </SkillBadge>
        <SkillBadge>C# </SkillBadge>
        <SkillBadge>Rust </SkillBadge>
        <SkillBadge>SQL </SkillBadge>
        <SkillBadge>Linux</SkillBadge>
        <SkillBadge>Windows</SkillBadge>
        <SkillBadge>Git</SkillBadge>
        <SkillBadge>Office 365</SkillBadge>
        <SkillBadge>Vim</SkillBadge>
        <SkillBadge>SAP</SkillBadge>
        <SkillBadge>Terraform</SkillBadge>
      </Skills>
    </AboutContainer>
  );
};

export default About;