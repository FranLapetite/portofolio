import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';
import { useLanguage } from '../i18n';

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

const Hobbies = () => {
  const { t } = useLanguage();
  const copy = t.hobbies;

  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <PageTitle>{copy.title}</PageTitle>
          <Lede>{copy.lede}</Lede>
        </Header>

        <Grid>
          {copy.interests.map((interest, index) => (
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
};

export default Hobbies;
