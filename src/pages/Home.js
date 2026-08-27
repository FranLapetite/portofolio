import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, Container, Eyebrow, Button, GhostButton } from '../components/primitives';

const HomeSection = styled(Section)`
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
`;

/** Two columns on desktop: the statement on the left, the live index on the right. */
const Hero = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: start;
  }
`;

const Statement = styled.div`
  min-width: 0;
`;

/**
 * The name is revealed by a curtain: the h1 clips, the inner span slides up
 * from below the clip line. Padding-bottom keeps the "ç" descender from
 * being shaved off by the overflow.
 */
const Name = styled.h1`
  font-size: clamp(2.3rem, 4.4vw, 3.4rem);
  line-height: 1.12;
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NameInner = styled(motion.span)`
  display: block;
`;

const Role = styled(motion.p)`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Bio = styled(motion.p)`
  font-size: 1.08rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 1.02rem;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

/**
 * A living index: everything stays readable, but a marker travels down the
 * rail and the focused line comes forward while the others recede.
 */
const Facts = styled(motion.ul)`
  list-style: none;
  position: relative;
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 1024px) {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const ROW_HEIGHT = 64;

const FactRow = styled.li`
  position: relative;
  height: ${ROW_HEIGHT}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
`;

/**
 * A single always-mounted marker translated to the active row. Deliberately
 * not a shared-layout (layoutId) element: mounting and unmounting one inside
 * AnimatePresence mode="wait" leaves the exit animation unresolved, which
 * blocks the next route from ever mounting.
 */
const Marker = styled(motion.span)`
  position: absolute;
  left: -1px;
  top: 0;
  width: 2px;
  height: ${ROW_HEIGHT}px;
  background: ${({ theme }) => theme.colors.accent};
`;

const FactLabel = styled(motion.span)`
  display: block;
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.25rem;
`;

const FactValue = styled(motion.span)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  line-height: 1.35;
  transform-origin: left center;

  a {
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const curtain = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const facts = [
  { label: 'Currently', value: "Founder, Fran's Guide" },
  { label: 'Previously', value: 'La Banque Postale, Accenture' },
  { label: 'Languages', value: 'FR · PT · EN · ES' },
  {
    label: 'Elsewhere',
    value: (
      <>
        <a href="https://www.linkedin.com/in/fran-lapetite" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href="https://github.com/FranLapetite" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </>
    ),
  },
];

const Home = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return undefined;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % facts.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduceMotion, paused]);

  return (
    <HomeSection>
      <Container>
        <Hero variants={container} initial="hidden" animate="show">
          <Statement>
            <Eyebrow as={motion.p} variants={item}>Paris, France</Eyebrow>
            <Name>
              <NameInner variants={reduceMotion ? item : curtain}>
                Françoise Lapetite
              </NameInner>
            </Name>
            <Role variants={item}>Product Manager &amp; Engineer</Role>
            <Bio variants={item}>
              I build products end to end, from customer discovery and prototyping through
              architecture, launch, and the analytics that tell you whether any of it
              worked. Trained as a computer science engineer, I spent four years bridging
              engineering and business at Accenture and La Banque Postale before founding
              Fran's Guide and shipping my own iOS product to the App Store.
            </Bio>
            <Actions variants={item}>
              <Button href="/Francoise_Lapetite_CV_2026.pdf" download>
                Download CV
              </Button>
              <GhostButton as={Link} to="/projects">
                View work
              </GhostButton>
            </Actions>
          </Statement>

          <Facts
            variants={item}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {!reduceMotion && (
              <Marker
                animate={{ y: active * ROW_HEIGHT }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              />
            )}

            {facts.map((fact, index) => {
              const isActive = reduceMotion || index === active;

              return (
                <FactRow
                  key={fact.label}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                >
                  <FactLabel animate={{ opacity: isActive ? 1 : 0.45 }}>
                    {fact.label}
                  </FactLabel>
                  <FactValue
                    animate={{
                      opacity: isActive ? 1 : 0.42,
                      scale: isActive ? 1.06 : 1,
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {fact.value}
                  </FactValue>
                </FactRow>
              );
            })}
          </Facts>
        </Hero>
      </Container>
    </HomeSection>
  );
};

export default Home;
