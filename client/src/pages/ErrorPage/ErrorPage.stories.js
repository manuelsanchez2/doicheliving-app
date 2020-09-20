import React from "react";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/ErrorPage",
  component: ErrorPage,
};

const Template = () => (
  <Router>
    <ErrorPage />
  </Router>
);

export const Default = Template.bind({});
