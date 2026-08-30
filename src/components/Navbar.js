import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { IconButton, IconLayer } from './primitives';
import { useLanguage } from '../i18n';

const MOBILE = '768px';
const DESKTOP = '769px';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bgBaseTranslucent};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  min-height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${MOBILE}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    min-height: 60px;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Logo = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;

  /* The theme and language switches move into the panel below this
     breakpoint, which leaves the wordmark room to stay close to full size. */
  @media (max-width: ${MOBILE}) {
    font-size: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.15rem;
  }
`;

/** The inline link row. Below the breakpoint it is replaced by the panel. */
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.35rem 0;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.textPrimary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

/** Theme + language, inline on desktop and inside the panel on mobile. */
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

const Burger = styled(IconButton)`
  display: none;

  @media (max-width: ${MOBILE}) {
    display: inline-flex;
  }
`;

const BurgerIcon = styled(IconLayer).attrs({ as: motion.span })`
  font-size: 1.05rem;
`;

/**
 * Full-screen menu. Rendered as a sibling of the header, never a child: the
 * header's backdrop-filter makes it a containing block, which would clip a
 * fixed-position descendant to the height of the bar.
 *
 * It sits just under the header's z-index so the wordmark and the close button
 * stay in place, and its padding-top clears that bar.
 */
const Overlay = styled(motion.nav)`
  position: fixed;
  inset: 0;
  z-index: 95;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${({ theme }) => theme.colors.bgBase};
  padding: calc(60px + ${({ theme }) => theme.spacing.lg})
    ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${DESKTOP}) {
    display: none;
  }
`;

/** Takes the free height and centres the links in it, so the menu reads as a
    composed page rather than a list stuck under the header. */
const OverlayLinks = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OverlayLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0.95rem 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

/** Numbered like the entries on the Projects page, so the menu speaks the
    same language as the rest of the site rather than inventing its own. */
const LinkIndex = styled.span`
  flex-shrink: 0;
  width: 1.75rem;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  ${OverlayLink}.active & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const LinkLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.85rem, 8.5vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.015em;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  ${OverlayLink}:hover & {
    transform: translateX(6px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${OverlayLink}:hover & {
      transform: none;
    }
  }
`;

/** Foot of the screen: the same standfirst the home page opens with, and the
    two switches. Grounds the menu instead of leaving it floating. */
const OverlayFoot = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FootNote = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const OverlayControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

/* The menu fades in as a surface, then the links rise into it one by one. */
const overlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut', when: 'beforeChildren' } },
};

const overlayList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

const overlayItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const links = [
  { to: '/', key: 'home', end: true },
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/hobbies', key: 'interests' },
  { to: '/contact', key: 'contact' },
];

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  /* Navigating away closes the menu; so does Escape or a resize back to the
     desktop layout, where the menu is hidden and would otherwise stay open. */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };

    /* Freeze the page underneath: without this the body keeps scrolling
       behind the full-screen menu on iOS. */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const menuLabel = open ? t.nav.closeMenu : t.nav.openMenu;

  return (
    <>
      <HeaderContainer>
        <Inner>
          <Logo to="/" end aria-label={t.nav.homeAria}>
            Françoise Lapetite
          </Logo>

          <DesktopNav>
            {links.map(({ to, key, end }) => (
              <StyledLink key={to} to={to} end={end}>
                {t.nav[key]}
              </StyledLink>
            ))}
          </DesktopNav>

          <Controls>
            <ThemeToggle />
            <LanguageToggle />
          </Controls>

          <Burger
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={menuLabel}
            title={menuLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence initial={false} mode="wait">
              <BurgerIcon
                key={open ? 'close' : 'open'}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {open ? <FiX /> : <FiMenu />}
              </BurgerIcon>
            </AnimatePresence>
          </Burger>
        </Inner>
      </HeaderContainer>

      <AnimatePresence initial={false}>
        {open && (
          <Overlay
            id="mobile-menu"
            key="mobile-menu"
            aria-label={t.nav.menuLabel}
            variants={overlay}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <OverlayLinks variants={reduceMotion ? undefined : overlayList}>
              {links.map(({ to, key, end }, index) => (
                <motion.div key={to} variants={reduceMotion ? undefined : overlayItem}>
                  <OverlayLink to={to} end={end} onClick={() => setOpen(false)}>
                    <LinkIndex aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </LinkIndex>
                    <LinkLabel>{t.nav[key]}</LinkLabel>
                  </OverlayLink>
                </motion.div>
              ))}
            </OverlayLinks>

            <OverlayFoot variants={reduceMotion ? undefined : overlayItem}>
              <FootNote>{t.home.eyebrow}</FootNote>
              <OverlayControls>
                <ThemeToggle />
                <LanguageToggle />
              </OverlayControls>
            </OverlayFoot>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
