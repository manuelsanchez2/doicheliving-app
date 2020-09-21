import React from "react";
import { Global, css } from "@emotion/core";
import Lato from "./assets/fonts/Lato-Regular.ttf";
import Nunito from "./assets/fonts/Nunito-Regular.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: "Lato-Regular";
          src: url(${Lato}) format("ttf");
        }
        @font-face {
          font-family: "Nunito-Regular";
          src: url(${Nunito}) format("ttf");
        }

        :root {
          --font-lato: "Lato-Regular";
          --font-nunito: "Nunito-Regular";

          --color-primary: #ffce00;
          --color-secondary: #000000;
          --color-white: #ffffff;
          --color-placeholder: #9b9b9b;
          --color-input: #f0f4f5;
          --color-light-border: #d5d5d5;
          --color-dark-border: #707070;
          --color-transparent: #c9c8c8;
          --color-submit: #ff0000;
          --color-gradient-submit: linear-gradient(
            175deg,
            rgba(238, 0, 0, 1) 48%,
            rgba(159, 25, 25, 1) 96%
          );

          --shadow-down: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 2px 6px rgba(0, 0, 0, 0.2);

          --shadow-up: 0 -2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 -2px 6px rgba(0, 0, 0, 0.2);

          height: 100vh;
        }

        code {
        }

        h2 {
          font-size: 1.6rem;
          font-family: var(--font-nunito);
          font-weight: bold;
        }
        h3 {
          font-size: 1.1rem;
          font-family: var(--font-lato);
          font-weight: bold;
        }
        h4 {
          font-size: 1rem;
          font-family: var(--font-lato);
          font-weight: bold;
        }
        p {
          font-size: 1rem;
          font-family: var(--font-lato);
        }

        small {
          font-size: 0.8rem;
          font-family: var(--font-lato);
          line-height: 0.8rem;
        }
        label {
          font-size: 0.7rem;
          font-family: var(--font-lato);
        }
        ::placeholder {
          font-size: 0.8rem;
          font-family: var(--font-lato);
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          background-color: var(--color-white);
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
      `}
    />
  );
};

export default GlobalStyles;
