import React from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Section, Container, Eyebrow, PageTitle } from '../components/primitives';

/**
 * Every section on this page shares one spine: a fixed left rail for the
 * heading, a fixed-width content column on the right. Two vertical alignment
 * lines for the whole page, so nothing reads as ragged.
 */
const Spine = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Intro = styled(Spine)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Statement = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.borderStrong};
`;

const Bio = styled.div`
  p {
    font-size: 1.02rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Block = styled(Spine)`
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const BlockTitle = styled.h2`
  font-size: clamp(1.3rem, 2.6vw, 1.5rem);
`;

/** Stacked rows: uneven lengths never sit side by side, so no ragged edge. */
const DefRow = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const DefLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.4rem;
`;

const DefValue = styled.p`
  font-size: 0.98rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/** Ten items, two columns, five clean rows. */
const StrengthGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Strength = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.55rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Language = styled.div`
  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 0.15rem;
  }

  span {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SchoolName = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
`;

const skillGroups = [
  {
    label: 'Product & analytics',
    value: 'Customer discovery and interviews, feature prioritization, roadmap and release planning, KPI analysis, App Store Connect & Analytics, Figma',
  },
  {
    label: 'Engineering',
    value: 'Python, React, SwiftUI, SQL, Bash, C, C++, C#, Git, Terraform, Vim',
  },
  {
    label: 'Business systems',
    value: 'Salesforce, SAP, CRM and SRM platforms',
  },
  {
    label: 'Security background',
    value: 'Governance frameworks, policy design, risk and privacy-first architecture',
  },
];

const strengths = [
  'Customer empathy and discovery',
  'Product innovation',
  'Stakeholder alignment',
  'Architecture',
  'Cross-functional coordination',
  'Problem-solving',
  'Technical communication',
  'Team leadership',
  'Building collaborative culture',
  'Fast learner',
];

const languages = [
  { name: 'French', level: 'Native' },
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Fluent' },
];

const About = () => (
  <Section>
    <Container>
      <Intro>
        <div>
          <Eyebrow>Profile</Eyebrow>
          <PageTitle>About</PageTitle>
          <Statement>
            A product-focused engineer who would rather solve a customer's problem than
            defend a spec.
          </Statement>
        </div>

        <Bio>
          <p>
            I build products end to end. That means sitting with the people who will use
            something before writing a line of code, deciding what not to build, designing
            the architecture, shipping it, and then reading the analytics honestly enough to
            change course. In 2025 I founded Fran's Guide and took an iOS app from an idea
            to the App Store on my own, covering product discovery, design, monetization,
            and analytics.
          </p>
          <p>
            Before that I spent four years inside large organizations. At Accenture I worked
            with Fortune 500 clients on digital transformation, translating customer pain
            points into technical solutions and acting as the bridge between engineering
            teams and business stakeholders. At La Banque Postale I moved into cybersecurity
            governance, where the real work turned out to be adoption: understanding why
            people weren't using the tools, and rewriting the approach until they did.
          </p>
          <p>
            My degree specialization was cybersecurity, and that training still shapes how I
            think. SéanceNote is local-first precisely because I know what happens to data
            that leaves a device. But it's the product side I want to keep building on:
            understanding users, making the call on what matters, and shipping it.
          </p>
        </Bio>
      </Intro>

      <Reveal>
        <Block>
          <BlockTitle>Skills</BlockTitle>
          <div>
            {skillGroups.map(({ label, value }) => (
              <DefRow key={label}>
                <DefLabel>{label}</DefLabel>
                <DefValue>{value}</DefValue>
              </DefRow>
            ))}
          </div>
        </Block>
      </Reveal>

      <Reveal>
        <Block>
          <BlockTitle>Education</BlockTitle>
          <div>
            <DefLabel>2019 to 2024</DefLabel>
            <SchoolName>EPITA, School of Engineering and Computer Science, Paris</SchoolName>
            <DefValue>
              Master of Computer Science Engineering, specialized in Cybersecurity, Systems,
              and Software Engineering.
            </DefValue>
          </div>
        </Block>
      </Reveal>

      <Reveal>
        <Block>
          <BlockTitle>Core strengths</BlockTitle>
          <StrengthGrid>
            {strengths.map((strength) => (
              <Strength key={strength}>{strength}</Strength>
            ))}
          </StrengthGrid>
        </Block>
      </Reveal>

      <Reveal>
        <Block>
          <BlockTitle>Languages</BlockTitle>
          <LanguageGrid>
            {languages.map(({ name, level }) => (
              <Language key={name}>
                <strong>{name}</strong>
                <span>{level}</span>
              </Language>
            ))}
          </LanguageGrid>
        </Block>
      </Reveal>
    </Container>
  </Section>
);

export default About;
