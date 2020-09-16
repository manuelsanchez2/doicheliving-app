import GlobalStyles from "../src/GlobalStyles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const AppDecorator = (Story, context) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Story {...context} />
      </Router>
    </>
  );
};

export const decorators = [AppDecorator];
