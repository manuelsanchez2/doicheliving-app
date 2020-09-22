import React from "react";
import Hamburg from "./Hamburg";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Destinations/Hamburg",
  component: Hamburg,
};

const Template = () => (
  <Router>
    <Hamburg />
  </Router>
);

export const Default = Template.bind({});
