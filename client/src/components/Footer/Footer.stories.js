import React from "react";

import Footer from "./Footer";

export default {
  title: "Main Parts/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "",
};
