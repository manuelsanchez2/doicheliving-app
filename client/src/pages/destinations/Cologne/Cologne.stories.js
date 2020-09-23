import React from "react";
import Cologne from "./Cologne";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Destinations/Cologne",
  component: Cologne,
};

const Template = () => (
  <Router>
    <Cologne />
  </Router>
);

export const Default = Template.bind({});
