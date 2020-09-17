import GlobalStyles from "../src/GlobalStyles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
const AppDecorator = (Story, context) => {
  return (
    <BrowserRouter>
      <GlobalStyles /> <Story {...context} />
    </BrowserRouter>
  );
};
export const decorators = [AppDecorator];
