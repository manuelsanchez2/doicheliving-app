import React from "react";

import LoginButton from "./LoginButton";

export default {
  title: "Buttons/LoginButton",
  component: LoginButton,
};

const Template = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ENVIAR",
};
