import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonRadioType from "../ButtonRadioType";

export default {
  title: "Buttons/ButtonRadioType",
  component: ButtonRadioType,
  argTypes: {
    title: { control: "text" },
    checked: { control: "boolean" },
    name: { control: "text" },
  },
} as ComponentMeta<typeof ButtonRadioType>;

const Template: ComponentStory<typeof ButtonRadioType> = (args) => (
  <ButtonRadioType {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  title: "I'm checked",
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  title: "I'm unchecked",
  checked: false,
};

export const ToggleCheck = Template.bind({});
ToggleCheck.args = {
  title: "Toggle me using -checked- property from Controls",
};
