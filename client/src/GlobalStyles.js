import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        #root {
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
        }

        html {
          font-size: 100%;
        }

        body {
          background-color: var(--color-white);
          color: var(--color-black);
          padding: 0;
          margin: 0;
        }

        code {
        }
      `}
    />
  );
};

export default GlobalStyles;
