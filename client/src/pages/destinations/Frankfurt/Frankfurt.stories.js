import React from "react";
import Frankfurt from "./Frankfurt";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Destinations/Frankfurt",
  component: Frankfurt,
};

const Template = () => (
  <Router>
    <Frankfurt />
  </Router>
);

export const Default = Template.bind({});
