import React from "react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Login",
  component: Login,
};

const Template = () => (
  <Router>
    <Login />
  </Router>
);

export const Default = Template.bind({});
