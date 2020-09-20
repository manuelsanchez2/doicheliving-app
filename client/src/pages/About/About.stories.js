import React from "react";
import About from "./About";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/About",
  component: About,
};

const Template = () => (
  <Router>
    <About />
  </Router>
);

export const Default = Template.bind({});
