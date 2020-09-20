import React from "react";
import Map from "./Map";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Map",
  component: Map,
};

const Template = () => (
  <Router>
    <Map />
  </Router>
);

export const Default = Template.bind({});
