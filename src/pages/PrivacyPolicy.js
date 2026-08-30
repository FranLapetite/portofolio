import React from 'react';
import styled from 'styled-components';
import { Section, Container, Eyebrow, PageTitle } from '../components/primitives';
import { Rich, useLanguage } from '../i18n';

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

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const copy = t.privacy;

  return (
    <Section>
      <Container>
        <Wrapper>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <PageTitle>{copy.title}</PageTitle>
          <EffectiveDate>{copy.effective}</EffectiveDate>

          <Paragraph>
            <Rich text={copy.intro} />
          </Paragraph>

          <Heading>{copy.collectedTitle}</Heading>
          <List>
            {copy.collected.map((line) => (
              <li key={line}>
                <Rich text={line} />
              </li>
            ))}
          </List>

          <Heading>{copy.usageTitle}</Heading>
          <List>
            {copy.usage.map((line) => (
              <li key={line}>
                <Rich text={line} />
              </li>
            ))}
          </List>

          <Heading>{copy.retentionTitle}</Heading>
          <Paragraph>
            <Rich text={copy.retention} />
          </Paragraph>

          <Heading>{copy.rightsTitle}</Heading>
          <List>
            {copy.rights.map((line) => (
              <li key={line}>
                <Rich text={line} />
              </li>
            ))}
          </List>
          <Paragraph>{copy.rightsNote}</Paragraph>

          <Heading>{copy.cookiesTitle}</Heading>
          <Paragraph>{copy.cookies}</Paragraph>

          <Heading>{copy.contactTitle}</Heading>
          <Paragraph>
            {copy.contactBefore}
            <a href="mailto:fran.lapetite@gmail.com">fran.lapetite@gmail.com</a>
            {copy.contactAfter}
          </Paragraph>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default PrivacyPolicy;
