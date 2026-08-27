import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bgBase};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button,
  label,
  summary,
  [role='button'],
  input[type='checkbox'],
  input[type='submit'] {
    font-family: inherit;
    cursor: pointer;
  }

  button:disabled,
  input:disabled {
    cursor: not-allowed;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

export default GlobalStyle;
