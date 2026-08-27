import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';

const Header = styled.div`
  max-width: ${({ theme }) => theme.layout.textWidth};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const BlockTitle = styled.h2`
  font-size: clamp(1.3rem, 2.6vw, 1.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Block = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Entry = styled.article`
  display: grid;
  grid-template-columns: 60px 1fr 200px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`;

const Index = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 0.45rem;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const Title = styled.h3`
  font-size: clamp(1.2rem, 2.4vw, 1.4rem);
  margin-bottom: 0.45rem;
`;

const Description = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Aside = styled.div`
  padding-top: 0.35rem;

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const ProjectLink = styled.a`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
  padding-bottom: 1px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Status = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CompactRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: baseline;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
`;

const CompactName = styled.h3`
  font-size: 1.08rem;
  margin-bottom: 0.2rem;
`;

const featured = [
  {
    title: 'SéanceNote',
    description:
      "An iOS application for writing session and meeting notes, processed entirely on-device for privacy. Templates adapt in length and structure to the user's profession, covering medical, legal, consulting, and research use cases.",
    link: 'https://apps.apple.com/fr/app/s%C3%A9ancenote/id6774525144?l=en-GB',
    linkLabel: 'App Store',
  },
  {
    title: 'Fox',
    description:
      'An iOS home-screen widget pairing a to-do list with an illustrated companion whose state reflects task completion, designed to encourage consistent follow-through.',
  },
  {
    title: 'Happello',
    description:
      'An iOS reminders application for recurring but easily forgotten personal administration such as annual checkups, blood tests, and document renewals, with a dedicated module for new parents covering vaccinations, appointments, and paperwork.',
  },
];

const engineering = [
  {
    title: 'Cloud-Outscale',
    description: 'Cloud infrastructure deployment using Terraform and Outscale.',
    link: 'https://github.com/FranLapetite/Cloud-Outscale',
  },
  {
    title: '3DExperience SIEM',
    description: 'Security Information and Event Management for 3DExperience Cloud.',
    link: 'https://github.com/FranLapetite/3DExperience_SIEM',
  },
  {
    title: 'LMNTRIX',
    description: '3D multiplayer maze runner built with C#, Unity, and Photon Engine.',
    link: 'https://github.com/FranLapetite/LMNTRIX',
  },
  {
    title: 'WiFi Analyzer & Logger',
    description: 'Network analysis and logging tool for wireless environments.',
    link: 'https://github.com/FranLapetite/wifi-analyzer-logger',
  },
];

const Projects = () => (
  <Section>
    <Container>
      <Header>
        <Eyebrow>Portfolio</Eyebrow>
        <PageTitle>Projects</PageTitle>
        <Lede>
          Independent iOS products and engineering work in cloud infrastructure and security.
        </Lede>
      </Header>

      <Block>
        <BlockTitle>Selected work</BlockTitle>
        <List>
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 70}>
              <Entry>
                <Index>{String(index + 1).padStart(2, '0')}</Index>
                <div>
                  <Title>{project.title}</Title>
                  <Description>{project.description}</Description>
                </div>
                <Aside>
                  {project.link ? (
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel || 'View project'}
                    </ProjectLink>
                  ) : (
                    <Status>In development</Status>
                  )}
                </Aside>
              </Entry>
            </Reveal>
          ))}
        </List>
      </Block>

      <Block>
        <BlockTitle>Engineering projects</BlockTitle>
        <List>
          {engineering.map((project, index) => (
            <Reveal key={project.title} delay={index * 50}>
              <CompactRow>
                <div>
                  <CompactName>{project.title}</CompactName>
                  <Description>{project.description}</Description>
                </div>
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ProjectLink>
              </CompactRow>
            </Reveal>
          ))}
        </List>
      </Block>
    </Container>
  </Section>
);

export default Projects;
