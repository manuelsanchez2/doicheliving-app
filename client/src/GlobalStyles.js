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
          --color-yellow: #ffce00;
          --color-black: #000000;
          --color-white: #ffffff;
          --color-grayplace: #9b9b9b;
          --color-grayinput: #f0f4f5;
          --color-grayborder: #d5d5d5;
          --color-graytrans: #c9c8c8;
          --color-red: #ff0000;
          --color-redgrad: linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 45%,
            rgba(0, 0, 0, 1) 95%
          );
          --shadow-down: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 3px 6px rgba(0, 0, 0, 0.2);

          --shadow-up: 0 -2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 -2px 6px rgba(0, 0, 0, 0.2);
        }

        html {
          font-size: 100%;
        }

        body {
          background-color: var(--color-white);
          color: var(--color-black);
          padding: 0;
          margin: 0;
          font-size: 32px;
          font-family: var(--font-nunito);
        }

        .header {
          box-shadow: var(--shadow-down);
          min-height: 75px;
        }
        .main {
          min-height: 650px;
        }
        .footer {
          min-height: 75px;
          box-shadow: var(--shadow-up);
        }

        code {
        }
      `}
    />
  );
};

export default GlobalStyles;
