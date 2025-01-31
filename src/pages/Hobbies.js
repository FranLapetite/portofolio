import React from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #eef2f3, #ffffff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3a86ff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HobbyCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HobbyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

const HobbyTitle = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HobbyDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Hobbies = () => {
  const hobbiesData = [
    {
      icon: "🎨",
      title: "Painting",
      description: "Expressing creativity through painting and experimenting with new techniques.",
    },
    {
      icon: "⚽",
      title: "Football",
      description: "Staying active and building teamwork through my love for football.",
    },
    {
      icon: "🎵",
      title: "Music",
      description: "Listening and exploring diverse genres of music to relax and create.",
    },
    {
      icon: "✈️",
      title: "Traveling",
      description: "Exploring different cultures, landscapes, and cuisines inspires me.",
    },
    {
      icon: "📷",
      title: "Photography",
      description: "Capturing the beauty of fleeting moments, finding inspiration in nature, and turning memories into timeless visuals.",
    },
    {
      icon: "🍳",
      title: "Cooking",
      description: "Exploring international cuisines, experimenting with flavors, and bringing people together over delicious meals.",
    },
    {
      icon: "🤝",
      title: "Volunteering",
      description: "Contributing to the community by supporting Restos du Cœur, helping those in need, and making a difference.",
    },
  ];

  return (
    <PageContainer>
      <Title>Hobbies & Interests</Title>
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