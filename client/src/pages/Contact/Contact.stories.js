import React from "react";
import Contact from "./Contact";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Contact",
  component: Contact,
};

const Template = () => (
  <Router>
    <Contact />
  </Router>
);

export const Default = Template.bind({});
