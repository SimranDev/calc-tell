import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../Label";

export default {
  title: "Label/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Text",
};
