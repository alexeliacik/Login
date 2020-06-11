import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 100%;  /* 1rem = 10px */
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledApp = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(40, 53, 147, 0.6);
  margin-top: 30px;
  padding-bottom: 40px;
  min-height: 35vh;

  .message {
    position: absolute;
    top: 3%;
    right: 4%;
    text-align: center;
  }
`;

export default StyledApp;
