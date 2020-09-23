import React from "react";
import Berlin from "./Berlin";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Destinations/Berlin",
  component: Berlin,
};

const Template = () => (
  <Router>
    <Berlin />
  </Router>
);

export const Default = Template.bind({});
