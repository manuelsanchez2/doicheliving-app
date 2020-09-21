import React from "react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template = () => (
  <Router>
    <Home />
  </Router>
);

export const Default = Template.bind({});
