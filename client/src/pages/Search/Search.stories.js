import React from "react";
import Search from "./Search";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Search",
  component: Search,
};

const Template = () => (
  <Router>
    <Search />
  </Router>
);

export const Default = Template.bind({});
