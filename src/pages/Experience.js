import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const PageContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #eef2f3, #ffffff);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3a86ff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Position = styled.h2`
  font-size: 1.8rem;
  color: #3a86ff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Company = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  color: #666;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  overflow: hidden;
  max-height: ${(props) => (props.expanded ? '500px' : '0')};
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding-top: ${(props) => (props.expanded ? '1rem' : '0')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  color: #3a86ff;
  border: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const experienceData = [
    {
      position: 'Cybersecurity Governance Specialist',
      company: 'La Banque Postale Paris, France',
      duration: 'September 2024 - Present',
      description:
        'Contribute to the operational readiness (MCO) of the Cybersecurity governance framework. Responsible for drafting, implementing, and monitoring cybersecurity policies across the organization.',
    },
    {
      position: 'Application Development - Apprenticeship',
      company: 'Accenture Paris, France',
      duration: 'October 2022 - August 2024',
      description:
        'Developing and maintaining applications while working on innovative software solutions. Collaborating with a cross-functional team to deliver high-quality projects. Participated in designing and optimizing back-end systems.',
    },
    {
      position: 'Business Analyst (Purchasing & Sales) - Internship',
      company: 'Faurecia Headquarter - Nanterre, France',
      duration: 'June 2021 - December 2021',
      description:
        'Analyzed sales data using SAP ARIBA and contributed to purchasing strategies using SAP C4C. Gained hands-on experience in business processes and data analytics. Worked closely with the sales and procurement teams to streamline workflows.',
    },
  ];

  return (
    <PageContainer>
      <Title>Professional Experience</Title>
      <ExperienceList>
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Position>{item.position}</Position>
            <Company>{item.company}</Company>
            <Duration>{item.duration}</Duration>
            <Description expanded={expandedItem === index}>
              {item.description}
            </Description>
            <ToggleButton onClick={() => toggleDetails(index)}>
              {expandedItem === index ? 'Show Less' : 'Show More'}
            </ToggleButton>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </PageContainer>
  );
};

export default Experience;