import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle, Lede } from '../components/primitives';

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

const experienceData = [
  {
    position: 'Founder & Product Lead',
    company: "Fran's Guide",
    location: 'Paris, France',
    companyLink: 'https://fransguide.com',
    duration: '2025 to Present',
    points: [
      'Designed and launched an iOS application delivering 24/7 AI-powered travel guidance, owning the full product lifecycle from customer discovery and feature prioritization through technical architecture, App Store distribution, and user analytics.',
      'Validated product-market fit through direct customer interviews and B2B partnership exploration, instrumenting acquisition, engagement, and monetization metrics.',
      'Integrated an AI assistant into the product experience, balancing technical capability against user needs and business viability.',
      'Extended the product with private guided tours and photography sessions, handling brand, web presence, and payment processing via Stripe.',
    ],
  },
  {
    position: 'Cybersecurity Governance & Customer Success',
    company: 'La Banque Postale',
    location: 'Paris, France',
    duration: '2024 to 2025',
    points: [
      'Accelerated adoption of internal security tooling by understanding user needs and translating technical requirements into business language, increasing adoption by 40%.',
      'Coordinated alignment between IT and business teams on security governance, facilitating cross-functional communication around shared objectives.',
      'Contributed to executive-level reporting, ensuring security insights were clear, actionable, and able to inform board-level decisions.',
    ],
  },
  {
    position: 'Application Development Analyst',
    company: 'Accenture',
    location: 'Paris, France',
    duration: '2022 to 2024',
    points: [
      'Partnered with Fortune 500 clients on digital transformation initiatives, translating customer pain points into technical solutions.',
      'Bridged engineering and business stakeholders by communicating technical concepts to non-technical audiences and aligning on realistic priorities.',
      'Identified technical capability gaps within delivery teams and co-designed solutions matching business needs.',
      'Supported change management and team coordination, helping cross-functional groups work together through transformation programmes.',
    ],
  },
  {
    position: 'Business Analyst, Purchasing & Sales',
    company: 'Faurecia',
    location: 'Nanterre, France',
    duration: 'June to Dec. 2021',
    points: [
      'Improved CRM and SRM workflows alongside procurement and sales teams, increasing visibility and decision-making accuracy across supplier and client networks.',
      'Used KPI reporting and data analysis to inform strategic business decisions and surface improvement opportunities.',
      'Supported data migration and user training to ensure smooth system transitions and stakeholder adoption.',
    ],
  },
];

const Experience = () => (
  <Section>
    <Container>
      <Header>
        <Eyebrow>Career</Eyebrow>
        <PageTitle>Experience</PageTitle>
        <Lede>
          Five years across enterprise consulting, cybersecurity governance, and building
          and shipping my own product.
        </Lede>
      </Header>

      <List>
        {experienceData.map((item, index) => (
          <Reveal key={item.company} delay={index * 70}>
            <Entry>
              <Duration>{item.duration}</Duration>
              <Body>
                <Position>{item.position}</Position>
                <Company>
                  {item.companyLink ? (
                    <a href={item.companyLink} target="_blank" rel="noopener noreferrer">
                      {item.company}
                    </a>
                  ) : (
                    item.company
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
        ))}
      </List>
    </Container>
  </Section>
);

export default Experience;
