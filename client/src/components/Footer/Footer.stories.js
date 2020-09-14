import React from "react";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Main Parts/Footer",
  component: Footer,
};

const Template = () => (
  <Router>
    <Footer />
  </Router>
);

export const MainFooter = Template.bind({});
