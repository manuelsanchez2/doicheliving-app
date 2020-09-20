import React from "react";
import LoadingPage from "./LoadingPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/LoadingPage",
  component: LoadingPage,
};

const Template = () => (
  <Router>
    <LoadingPage />
  </Router>
);

export const Default = Template.bind({});
