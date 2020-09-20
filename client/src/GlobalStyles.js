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
          --color-darkgrayborder: #707070;
          --color-graytrans: #c9c8c8;
          --color-red: #ff0000;
          --color-redgrad: linear-gradient(
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

        /* MAIN PAGE MAIN */

        .main--main {
          flex: 1;
          padding: 0 1em 0 1em;
        }

        /* MAIN SUBSCRIBE SECTION  */

        .subscribe__section {
          height: 20%;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-flow: column nowrap;
        }

        .subscribe__section__text {
          margin-top: 0.5rem;
          font-family: var(--font-lato);
          font-size: 1rem;
          text-align: center;
        }

        .subscribe__section__field input {
          border: 1px solid var(--color-grayborder);
          background: #f0f4f5;
          border-radius: 4px 4px 4px 4px;
          padding: 0.5rem;
          margin: 0.3rem 0;
          flex: 1;
          width: 90vw;
        }

        .subscribe__section__field button {
          border: 1px solid var(--color-redgrad);
          border-radius: 15px;
          background: var(--color-redgrad);
          margin: 0 auto;
          margin-top: 6px;
          padding: 0.5rem 2rem;
          color: var(--color-white);
          font-family: var(--font-lato);
          font-size: 1rem;
          letter-spacing: 3px;
          display: block;
        }
      `}
    />
  );
};

export default GlobalStyles;
