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
            0 8px 6px rgba(0, 0, 0, 0.2);

          --shadow-up: 0 -2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 -2px 6px rgba(0, 0, 0, 0.2);

          height: 100vh;
        }

        code {
        }

        /* @media (max-width: 375px) { */
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
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          background-color: var(--color-yellow);
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }

        .header {
          box-shadow: var(--shadow-down);
          max-height: 15%;
          display: flex;
          justify-content: space-around;
          border-radius: 0px 0px 10px 10px;
          border: 1px solid var(--color-grayborder);
          background-color: var(--color-white);
        }
        .main {
          flex: 1;
          padding: 0 1em 0 1em;
        }
        .footer {
          box-shadow: var(--shadow-up);
          max-height: 15%;
          display: flex;
          justify-content: space-around;
          background-color: var(--color-white);
          border-radius: 10px 10px 0px 0px;
          border: 1px solid var(--color-grayborder);
        }

        img {
          max-width: 30px;
          max-height: 30px;
          margin: 15px 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
