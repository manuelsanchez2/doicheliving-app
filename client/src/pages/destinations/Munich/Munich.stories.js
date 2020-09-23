import React from "react";
import Munich from "./Munich";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Destinations/Munich",
  component: Munich,
};

const Template = () => (
  <Router>
    <Munich />
  </Router>
);

export const Default = Template.bind({});
