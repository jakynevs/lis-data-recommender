import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset and other global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export default GlobalStyle;
