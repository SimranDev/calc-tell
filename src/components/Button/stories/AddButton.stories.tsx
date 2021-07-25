import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddButton from "../AddButton";

export default {
  title: "Buttons/AddButton",
  component: AddButton,
  argTypes: {
    title: { control: "text" },
  },
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = (args) => (
  <AddButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Add something",
};
