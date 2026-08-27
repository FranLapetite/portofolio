import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/**
 * Fades an element in the first time it scrolls into view, then stops
 * observing so it never re-animates. Respects prefers-reduced-motion.
 */
const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '14px')});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: ${({ $delay }) => $delay}ms;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const Reveal = ({ children, delay = 0, as, ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    /* Fail-safe: content must never stay invisible because the observer did
       not fire (slow paint, transition timing, an unsupported edge case). */
    const fallback = setTimeout(() => setVisible(true), 1500);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Wrapper ref={ref} as={as} $visible={visible} $delay={delay} {...props}>
      {children}
    </Wrapper>
  );
};

export default Reveal;
