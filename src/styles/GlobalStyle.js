import { css } from "@emotion/react";

export const globalStyles = (theme) => css`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: "Pretendard", system-ui, sans-serif;
    line-height: 1.6;
    word-break: keep-all;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :focus-visible {
    outline: 3px solid ${theme.colors.accent};
    outline-offset: 5px;
  }

  ::selection {
    background: ${theme.colors.accent};
    color: ${theme.colors.background};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;
