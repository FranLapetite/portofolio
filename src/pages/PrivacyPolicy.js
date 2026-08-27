import React from 'react';
import styled from 'styled-components';
import { Section, Container, Eyebrow, PageTitle } from '../components/primitives';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.textWidth};
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  strong {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const List = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.78em;
    width: 5px;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderStrong};
  }

  strong {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const EffectiveDate = styled.p`
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PrivacyPolicy = () => (
  <Section>
    <Container>
      <Wrapper>
        <Eyebrow>Legal</Eyebrow>
        <PageTitle>Privacy Policy</PageTitle>
        <EffectiveDate>Effective 1 February 2025</EffectiveDate>

        <Paragraph>
          Welcome to <strong>francoiselapetite.com</strong>. Your privacy is important to me.
          This policy explains how personal data is collected, used, and protected, in
          compliance with the General Data Protection Regulation (GDPR).
        </Paragraph>

        <Heading>1. Data collected</Heading>
        <List>
          <li>Information you provide via the contact form (name, email, message)</li>
          <li>Analytics data such as cookies, IP addresses, and browsing behaviour</li>
        </List>

        <Heading>2. How your data is used</Heading>
        <List>
          <li>To respond to your messages and enquiries</li>
          <li>To improve website functionality and user experience</li>
          <li>To analyse traffic and optimise website performance, where analytics is used</li>
        </List>

        <Heading>3. Data retention</Heading>
        <Paragraph>
          Personal data is retained only as long as necessary for the purposes described
          above. Contact form data is stored for a maximum of <strong>6 months</strong>.
          Analytics data may be retained for up to <strong>12 months</strong>.
        </Paragraph>

        <Heading>4. Your rights under GDPR</Heading>
        <List>
          <li><strong>Access</strong> your personal data and request a copy</li>
          <li><strong>Correct</strong> any inaccurate information</li>
          <li><strong>Request deletion</strong> of your personal data</li>
          <li><strong>Withdraw consent</strong> for data processing at any time</li>
          <li><strong>Restrict or object</strong> to certain types of processing</li>
        </List>
        <Paragraph>
          To exercise these rights, please use the contact details below.
        </Paragraph>

        <Heading>5. Cookies and tracking</Heading>
        <Paragraph>
          If cookies or tracking tools are used, you will be asked for consent on your first
          visit. You can also manage cookie preferences through your browser settings.
        </Paragraph>

        <Heading>6. Contact</Heading>
        <Paragraph>
          For any privacy-related question, write to{' '}
          <a href="mailto:fran.lapetite@gmail.com">fran.lapetite@gmail.com</a>.
        </Paragraph>
      </Wrapper>
    </Container>
  </Section>
);

export default PrivacyPolicy;
