import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  body {
    background: ${props => props.theme.ColorBaseBackground};
    color: ${props => props.theme.ColorBaseText};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.ColorBaseHover};
  }
`;