import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Profile",
  component: Profile,
};

const Template = () => (
  <Router>
    <Profile />
  </Router>
);

export const Default = Template.bind({});
