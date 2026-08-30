import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';
import { useLanguage } from '../i18n';

const Header = styled.div`
  max-width: ${({ theme }) => theme.layout.textWidth};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Entry = styled.article`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`;

const Duration = styled.p`
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 0.35rem;
`;

const Body = styled.div``;

const Position = styled.h2`
  font-size: clamp(1.25rem, 2.4vw, 1.45rem);
  margin-bottom: 0.3rem;
`;

const Company = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Points = styled.ul`
  list-style: none;

  li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 0.98rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.4rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 5px;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderStrong};
  }
`;

/* Employer names and their links are the same in every language, so they stay
   out of the dictionaries and are matched to the translated entries by position. */
const employers = [
  { company: "Fran's Guide", companyLink: 'https://fransguide.com' },
  { company: 'La Banque Postale' },
  { company: 'Accenture' },
  { company: 'Faurecia' },
];

const Experience = () => {
  const { t } = useLanguage();
  const copy = t.experience;

  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <PageTitle>{copy.title}</PageTitle>
          <Lede>{copy.lede}</Lede>
        </Header>

        <List>
          {copy.entries.map((item, index) => {
            const { company, companyLink } = employers[index];

            return (
              <Reveal key={company} delay={index * 70}>
                <Entry>
                  <Duration>{item.duration}</Duration>
                  <Body>
                    <Position>{item.position}</Position>
                    <Company>
                      {companyLink ? (
                        <a href={companyLink} target="_blank" rel="noopener noreferrer">
                          {company}
                        </a>
                      ) : (
                        company
                      )}
                      {', '}
                      {item.location}
                    </Company>
                    <Points>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </Points>
                  </Body>
                </Entry>
              </Reveal>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

export default Experience;
