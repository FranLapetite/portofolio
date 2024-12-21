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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Button = styled.a`
  background: #4facfe;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #3a8fde;
  }
`;

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experiences.",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce app with React, Node.js, and MongoDB, featuring user authentication and shopping cart.",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app built with React and OpenWeatherMap API.",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Expense Tracker",
      description: "A simple React app for tracking income and expenses with data visualization using Chart.js.",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Task Manager",
      description: "A to-do list and task management app with React and local storage.",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Blog Platform",
      description: "A blogging platform built with React, GraphQL, and Firebase for authentication and storage.",
      liveDemo: "#",
      sourceCode: "#",
    },
  ];

  return (
    <PageContainer>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonGroup>
              <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Button>
              <Button href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                Source Code
              </Button>
            </ButtonGroup>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default Projects;