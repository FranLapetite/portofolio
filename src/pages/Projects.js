import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #eef2f3, #ffffff);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #3a86ff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem; /* Reduce font size on mobile */
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 column layout on small screens */
  }
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
  max-width: 100%;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.2rem; /* Slightly smaller padding on mobile */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3a86ff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller text for better fit */
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: white;
  background: linear-gradient(135deg, #3a86ff, #00b2fe);
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller buttons */
    padding: 0.6rem 1.2rem;
  }
`;

const Projects = () => {
  const projectData = [
    {
      title: "Cloud-Outscale",
      description: "Deployment of a Cloud Infrastructure using Terraform and Outscale.",
      link: "https://github.com/FranLapetite/Cloud-Outscale",
    },
    {
      title: "3DExperience_SIEM",
      description: "Security Information and Event Management (SIEM) for 3DExperience Cloud.",
      link: "https://github.com/FranLapetite/3DExperience_SIEM",
    },
    {
      title: "LMNTRIX",
      description: "3D multiplayer maze runner game. (C#, Unity 3D, Photon Engine).",
      link: "https://github.com/FranLapetite/LMNTRIX",
    },
    {
      title: "java_api_training",
      description: "Java API training exercises and projects.",
      link: "https://github.com/FranLapetite/java_api_training",
    },
    {
      title: "wifi-analyzer-logger",
      description: "WiFi analyzer and logger tool.",
      link: "https://github.com/FranLapetite/wifi-analyzer-logger",
    },
    {
      title: "TODO app",
      description: "A TODO app to help with your daily tasks made in SwiftUI",
      link: "https://github.com/FranLapetite/TODOlist",
    },
    {
      title: "Tip app",
      description: "Your app to help you to calculate the tip at the end of your meal in SwiftUI",
      link: "https://github.com/FranLapetite/TODOlist",
    },
    {
      title: "Calculator",
      description: "Simple calculator in SwiftUI",
      link: "https://github.com/FranLapetite/TODOlist",
    },
  ];

  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;