import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FoxMascot from '../components/FoxMascot';
import { Section, Container, Eyebrow, PageTitle, Lede, GhostButton } from '../components/primitives';

const Centered = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: ${({ theme }) => theme.layout.textWidth};
`;

const Checklist = styled.div`
  width: 100%;
  max-width: 380px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: left;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Item = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.98rem;
  color: ${({ theme, $done }) => ($done ? theme.colors.textMuted : theme.colors.textPrimary)};
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
  cursor: pointer;
  transition: color 0.2s ease;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  accent-color: ${({ theme }) => theme.colors.accentFox};
`;

const Story = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.98rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`;

const items = ['Browse the projects', 'Read about Fox', 'Get in touch'];

const FoxDen = () => {
  const [checked, setChecked] = useState([false, false, false]);
  const doneCount = checked.filter(Boolean).length;
  const mood = doneCount === items.length ? 'proud' : doneCount === 0 ? 'focused' : 'reading';

  const toggle = (index) => {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <Section>
      <Centered>
        <Eyebrow>A small detour</Eyebrow>
        <FoxMascot mood={mood} size={180} />
        <PageTitle>Fox Den</PageTitle>
        <Lede>
          Fox is the companion from my to-do widget app. Its expression follows your
          progress. Tick the list below and watch.
        </Lede>

        <Checklist>
          {items.map((item, index) => (
            <Item key={item} $done={checked[index]}>
              <Checkbox
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggle(index)}
              />
              {item}
            </Item>
          ))}
        </Checklist>

        <Story>
          I built Fox because a to-do list that stays silent whether or not you follow
          through never helped me much. This one reacts, which turns out to be a surprisingly
          effective nudge.
        </Story>

        <Actions>
          <GhostButton as={Link} to="/projects">See Fox in Projects</GhostButton>
          <GhostButton
            as="a"
            href="https://github.com/FranLapetite"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </GhostButton>
        </Actions>
      </Centered>
    </Section>
  );
};

export default FoxDen;
