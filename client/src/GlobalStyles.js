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
          height: 100vh;
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
        }

        html {
        }

        code {
        }

        @media (max-width: 400px) {
          h2 {
            font-size: 30px;
            font-family: var(--font-nunito);
            font-weight: bold;
          }
          h3 {
            font-size: 18px;
            font-family: var(--font-lato);
            font-weight: bold;
          }
          h4 {
            font-size: 16px;
            font-family: var(--font-lato);
            font-weight: bold;
          }
          p {
            font-size: 16px;
            font-family: var(--font-lato);
          }

          small {
            font-size: 13px;
            font-family: var(--font-lato);
          }

          body {
            padding: 0;
            margin: 0;
            background-color: var(--color-yellow);
          }

          .header {
            box-shadow: var(--shadow-down);
            min-height: 80px;
            display: flex;
            justify-content: space-around;
            border-radius: 0px 0px 20px 20px;
            background-color: var(--color-white);
          }
          .main {
          }
          .footer {
            box-shadow: var(--shadow-up);
            min-height: 80px;
            display: flex;
            justify-content: space-around;
            background-color: var(--color-white);
            border-radius: 20px 20px 0px 0px;
            margin-bottom: -68px;
          }

          .container {
            height: 100vh;
            width: 100vw;
            display: grid;
            grid-template-rows: auto 2fr auto;
            margin: 0 auto;
          }

          img {
            max-width: 45px;
            max-height: 45px;
            margin-top: 15px;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
