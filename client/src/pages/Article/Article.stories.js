import React from "react";
import Article from "./Article";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/Article",
  component: Article,
};

const Template = () => (
  <Router>
    <Article />
  </Router>
);

export const Default = Template.bind({});
