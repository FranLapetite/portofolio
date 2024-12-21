import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #4facfe;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
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

const Languages = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LanguageBadge = styled.span`
  background: #00f2fe;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Certifications = styled.div`
  margin-top: 2rem;
  text-align: left;
  max-width: 800px;
  margin: 2rem auto;
`;

const CertificationItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CertificationTitle = styled.h4`
  font-size: 1.5rem;
  color: #4facfe;
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
        Hi, I'm Françoise Lapetite, a passionate Computer Science Engineer with a knack for creating
        visually appealing and functional web applications. I thrive in diverse environments,
        having worked and studied in Brazil, Canada, and France.
      </Bio>
      <SectionTitle>Skills</SectionTitle>
      <Skills>
        <SkillBadge>C++</SkillBadge>
        <SkillBadge>C#</SkillBadge>
        <SkillBadge>Python</SkillBadge>
        <SkillBadge>Rust</SkillBadge>
        <SkillBadge>SQL</SkillBadge>
        <SkillBadge>JavaScript</SkillBadge>
        <SkillBadge>React</SkillBadge>
        <SkillBadge>CSS</SkillBadge>
        <SkillBadge>Linux</SkillBadge>
        <SkillBadge>Windows</SkillBadge>
        <SkillBadge>Git</SkillBadge>
        <SkillBadge>Office 365</SkillBadge>
        <SkillBadge>Vim</SkillBadge>
        <SkillBadge>SAP</SkillBadge>
        <SkillBadge>Terraform</SkillBadge>
        <SkillBadge>Malware Analysis</SkillBadge>
        <SkillBadge>Forensics</SkillBadge>
        <SkillBadge>Network</SkillBadge>
        <SkillBadge>Pentest</SkillBadge>
      </Skills>
      <SectionTitle>Languages</SectionTitle>
      <Languages>
        <LanguageBadge>French</LanguageBadge>
        <LanguageBadge>English</LanguageBadge>
        <LanguageBadge>Portuguese</LanguageBadge>
        <LanguageBadge>Spanish</LanguageBadge>
      </Languages>
      <SectionTitle>Certifications</SectionTitle>
      <Certifications>
        <CertificationItem>
          <CertificationTitle>Certified Ethical Hacker (CEH)</CertificationTitle>
          <CertificationDetails>
            Completed in 2023. Learned ethical hacking techniques, penetration testing, and network security.
          </CertificationDetails>
        </CertificationItem>
        <CertificationItem>
          <CertificationTitle>AWS Certified Solutions Architect</CertificationTitle>
          <CertificationDetails>
            Earned in 2022. Gained expertise in deploying, managing, and securing scalable cloud applications.
          </CertificationDetails>
        </CertificationItem>
        <CertificationItem>
          <CertificationTitle>Cisco Certified Network Associate (CCNA)</CertificationTitle>
          <CertificationDetails>
            Achieved in 2021. Mastered network fundamentals, routing, switching, and basic network security.
          </CertificationDetails>
        </CertificationItem>
      </Certifications>
    </AboutContainer>
  );
};

export default About;