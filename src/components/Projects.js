import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  background: #4facfe;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  &:hover {
    background: #3a8fde;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <Title>My Projects</Title>
    <ProjectGrid>
      <ProjectCard>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          A brief description of Project 1.
        </ProjectDescription>
        <Button href="#">Live Demo</Button>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>
          A brief description of Project 2.
        </ProjectDescription>
        <Button href="#">Live Demo</Button>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;