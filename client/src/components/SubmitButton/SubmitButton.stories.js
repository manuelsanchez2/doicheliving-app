import React from "react";

import SubmitButton from "./SubmitButton";

export default {
  title: "Buttons/SubmitButton",
  component: SubmitButton,
};

const Template = (args) => <SubmitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ENVIAR",
};
