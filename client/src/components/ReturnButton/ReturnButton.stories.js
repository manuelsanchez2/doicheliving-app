import React from "react";

import ReturnButton from "./ReturnButton";

export default {
  title: "Buttons/ReturnButton",
  component: ReturnButton,
};

const Template = (args) => <ReturnButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <img src="" alt="" />,
};
