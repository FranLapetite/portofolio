import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #eef2f3, #ffffff);
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #3a86ff;
  font-family: 'Poppins', sans-serif;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 900px;
  margin: auto;
`;

const SkillBadge = styled(motion.span)`
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Certifications = styled.div`
  margin-top: 3rem;
  text-align: left;
  max-width: 800px;
  margin: auto;
`;

const CertificationItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CertificationTitle = styled.h4`
  font-size: 1.5rem;
  color: #3a86ff;
  margin-bottom: 0.5rem;
`;

const CertificationDetails = styled.p`
  font-size: 1rem;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Bio>
        Hi, I'm <strong>Françoise Lapetite</strong>, a passionate <strong>Computer Science Engineer</strong> with expertise in 
        cybersecurity, AI, and software development. With international experience across Brazil, Canada, and France, I specialize 
        in building robust systems, analyzing vulnerabilities, and ensuring security compliance.
      </Bio>

      {/* Skills Section */}
      <SectionTitle>Skills</SectionTitle>
      <Skills>
        {[
          'C++',
          'C#',
          'Python',
          'Rust',
          'SQL',
          'JavaScript',
          'React',
          'CSS',
          'Linux',
          'Windows',
          'Git',
          'Office 365',
          'Vim',
          'SAP',
          'Terraform',
          'Malware Analysis',
          'Forensics',
          'Network Security',
          'Penetration Testing',
        ].map((skill) => (
          <SkillBadge whileHover={{ scale: 1.1 }} key={skill}>
            {skill}
          </SkillBadge>
        ))}
      </Skills>

      {/* Certifications Section */}
      <SectionTitle>Certifications</SectionTitle>
      <Certifications>
        {[
          {
            title: 'Google AI Essentials',
            details: 'Completed in 2025. Comprehensive foundational training in Google’s AI tools, technologies, and best practices.',
          },
        ].map(({ title, details }, index) => (
          <CertificationItem key={index}>
            <CertificationTitle>{title}</CertificationTitle>
            <CertificationDetails>{details}</CertificationDetails>
          </CertificationItem>
        ))}
      </Certifications>
    </AboutContainer>
  );
};

export default About;