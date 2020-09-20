import React from "react";
import Questions from "./Questions";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Questions",
  component: Questions,
};

const Template = () => (
  <Router>
    <Questions />
  </Router>
);

export const Default = Template.bind({});
