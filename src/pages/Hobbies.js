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

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const HobbyCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HobbyIcon = styled.div`
  font-size: 2.5rem;
  color: #4facfe;
  margin-bottom: 0.5rem;
`;

const HobbyTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const HobbyDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Hobbies = () => {
  const hobbiesData = [
    {
      icon: "🎨",
      title: "Painting",
      description: "I enjoy expressing creativity through painting and exploring new art techniques.",
    },
    {
      icon: "⚽",
      title: "Football",
      description: "Playing football keeps me active and helps build teamwork and strategy skills.",
    },
    {
      icon: "🎵",
      title: "Music",
      description: "I love playing the guitar and discovering new genres of music.",
    },
    {
      icon: "✈️",
      title: "Traveling",
      description: "Exploring different cultures and cuisines expands my perspective on life.",
    },
    {
      icon: "📚",
      title: "Reading",
      description: "I enjoy reading books on personal development and science fiction.",
    },
  ];

  return (
    <PageContainer>
      <Title>Hobbies & Extracurricular Activities</Title>
      <HobbiesGrid>
        {hobbiesData.map((hobby, index) => (
          <HobbyCard key={index}>
            <HobbyIcon>{hobby.icon}</HobbyIcon>
            <HobbyTitle>{hobby.title}</HobbyTitle>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </PageContainer>
  );
};

export default Hobbies;