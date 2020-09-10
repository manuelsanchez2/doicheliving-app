import React from "react";

import YellowButton from "./YellowButton";

export default {
  title: "Buttons/YellowButton",
  component: YellowButton,
};

const Template = (args) => <YellowButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ENVIAR",
};
