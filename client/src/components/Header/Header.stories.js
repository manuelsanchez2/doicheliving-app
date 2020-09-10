import React from "react";

import Header from "./Header";

export default {
  title: "Main Parts/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "",
};
