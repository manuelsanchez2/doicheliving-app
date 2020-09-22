import React from "react";

import FavButton from "./FavButton";

export default {
  title: "FavButton",
  component: FavButton,
};

const Template = (args) => <FavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Default",
  inactive: true,
};
