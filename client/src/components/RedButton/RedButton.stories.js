import React from "react";

import RedButton from "./RedButton";

export default {
  title: "Buttons/RedButton",
  component: RedButton,
};

const Template = (args) => <RedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ENVIAR",
};
