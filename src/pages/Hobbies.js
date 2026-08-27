import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';

const Header = styled.div`
  max-width: ${({ theme }) => theme.layout.textWidth};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

/** Two columns so descriptions keep a readable measure instead of running edge to edge. */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Entry = styled.div`
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
`;

const Description = styled.p`
  font-size: 0.96rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const interests = [
  {
    title: 'Photography',
    description:
      'Chasing light and fleeting moments. It taught me framing, patience, and that the shot worth keeping is usually the one you almost walked past.',
  },
  {
    title: 'Painting',
    description:
      'A long-standing practice, and where most of my sense of composition and colour comes from.',
  },
  {
    title: 'Travel',
    description:
      'Exploring cultures, landscapes, and cuisines. Four languages later, it is still the fastest way I learn anything.',
  },
  {
    title: 'Cooking',
    description:
      'Experimenting with international cuisines and getting people around a table. The closest thing I have to a reset button.',
  },
  {
    title: 'Football',
    description:
      'Staying active, and keeping a taste for team dynamics outside of work.',
  },
  {
    title: 'Music',
    description:
      'Listening widely across genres, a constant companion while building things.',
  },
  {
    title: 'Volunteering',
    description:
      'Supporting Restos du Cœur, contributing where it actually counts.',
  },
];

const Hobbies = () => (
  <Section>
    <Container>
      <Header>
        <Eyebrow>Outside work</Eyebrow>
        <PageTitle>Interests</PageTitle>
        <Lede>
          The things that occupy me away from a keyboard, several of which ended up shaping
          how I look at the things I build.
        </Lede>
      </Header>

      <Grid>
        {interests.map((interest, index) => (
          <Reveal key={interest.title} delay={index * 40}>
            <Entry>
              <Name>{interest.title}</Name>
              <Description>{interest.description}</Description>
            </Entry>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Hobbies;
