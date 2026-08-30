import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FoxMascot from '../components/FoxMascot';
import { Section, Container, Eyebrow, GhostButton } from '../components/primitives';
import { useLanguage } from '../i18n';

const Centered = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const Title = styled.h1`
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.xs};
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 420px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const NotFound = () => {
  const { t } = useLanguage();
  const copy = t.notFound;

  return (
    <Section>
      <Centered>
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <FoxMascot mood="judging" size={170} />
        <Title>{copy.title}</Title>
        <Message>{copy.message}</Message>
        <GhostButton as={Link} to="/">
          {copy.back}
        </GhostButton>
      </Centered>
    </Section>
  );
};

export default NotFound;
