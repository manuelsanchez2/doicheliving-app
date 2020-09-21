import React from "react";
import Register from "./Register";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Register",
  component: Register,
};

const Template = () => (
  <Router>
    <Register />
  </Router>
);

export const Default = Template.bind({});
