import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.baseFocus};
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.basePost};
    color: ${(props) => props.theme.colors.baseText};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-family: ${(props) => props.theme.fonts.sans};
    font-size: 1rem;
    line-height: 1.6;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.baseText};
    cursor: pointer;

    &:hover {
      transition: background-color 0.1s, color 0.1s, border-color 0.1s;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input {
    border: none;
  }
`;
