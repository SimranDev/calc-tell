import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RemoveButton from "../RemoveButton";

export default {
  title: "Buttons/RemoveButton",
  component: RemoveButton,
} as ComponentMeta<typeof RemoveButton>;

const Template: ComponentStory<typeof RemoveButton> = (args) => (
  <RemoveButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
