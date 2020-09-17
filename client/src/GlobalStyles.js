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

        .main {
          flex: 1;
          padding: 0 1em 0 1em;
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

        /* MAIN SOCIAL SECTION  */

        .social__section {
          height: 30vh;
          display: flex;
          flex-flow: column nowrap;
        }

        .social__section h3 {
          margin: 0 auto;
        }

        .social__section__container {
          padding: 1rem 0;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: var(--color-yellow);
          border-radius: 10px 10px 10px 10px;
          border: 1px solid var(--color-darkgrayborder);
          box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
        }

        .social__item__container {
          width: 42vw;
          background: var(--color-white);
          border-radius: 10px 10px 10px 10px;
          border: 1px solid var(--color-darkgrayborder);
          box-shadow: 0.5px 0px 10px 0px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
          padding-top: 0.3rem;
          margin-right: 0.1rem;
        }

        .social__item__container img {
          height: 2.3vh;
          margin-bottom: 0.2rem;
          margin-left: 0.6rem;
        }

        .social__item__container small {
          font-size: 0.6rem;
          margin-left: 0.5rem;
        }

        /* LOGIN PAGE  */
        .main--login {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          padding: 0em 1em 0 1em;
        }

        .form__image {
          align-items: center;
          justify-content: center;
          display: flex;
        }

        .form__high__container {
          background: var(--color-white);
          border-radius: 10px 10px 10px 10px;
          border: 1px solid var(--color-darkgrayborder);
          box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
          align-items: center;
          justify-content: center;
          display: flex;
          max-height: 80%;
        }

        .form__width__container {
          max-width: 320px;
          width: 100%;
          padding: 3.5rem 1.5rem;
        }

        .form__field {
          display: flex;
          padding-bottom: 0.9rem;
          align-items: center;
        }

        .form__field:last-child {
          justify-content: center;
        }

        .form__field label {
          flex: 0 0 80px;
          font-family: var(--font-lato);
        }

        .form__field input[type="password"],
        .form__field input[type="email"],
        .form__field input[type="text"] {
          border: 1px solid var(--color-grayborder);
          background: #f0f4f5;
          border-radius: 4px 4px 4px 4px;
          padding: 0.5rem;
          flex: 1;
        }

        .button__login {
          border: 1px solid var(--color-yellow);
          background: var(--color-yellow);
          border-radius: 10px;
          color: var(--color-white);
          font-family: var(--font-lato);
          font-size: 1rem;
          letter-spacing: 2px;
          padding: 0.3rem 1.5rem;
        }
      `}
    />
  );
};

export default GlobalStyles;
