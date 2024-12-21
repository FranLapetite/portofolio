import React from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4facfe;
  margin-bottom: 1rem;
`;

const ExperienceList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Position = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Company = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Experience = () => {
  return (
    <PageContainer>
      <Title>Professional Experience</Title>
      <ExperienceList>
        <ExperienceItem>
          <Position>Application Development - Apprenticeship</Position>
          <Company>Accenture Paris, France</Company>
          <Duration>October 2022 - Present</Duration>
          <Description>
            Developing and maintaining applications while working on innovative software
            solutions. Collaborating with a cross-functional team to deliver high-quality
            projects.
          </Description>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Business Analyst (Purchasing & Sales) - Internship</Position>
          <Company>Faurecia Headquarter - Nanterre, France</Company>
          <Duration>June 2021 - December 2021</Duration>
          <Description>
            Analyzed sales data using SAP ARIBA and contributed to purchasing strategies using
            SAP C4C. Gained hands-on experience in business processes and data analytics.
          </Description>
        </ExperienceItem>
      </ExperienceList>
    </PageContainer>
  );
};

export default Experience;