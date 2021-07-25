import { ComponentMeta, ComponentStory } from "@storybook/react";
import OutputItem from "../OutputItem";

export default {
  title: "Output/OutputItem",
  component: OutputItem,
  argTypes: {
    label: { control: "text" },
    dollars: { control: "number" },
  },
} as ComponentMeta<typeof OutputItem>;

const Template: ComponentStory<typeof OutputItem> = (args) => (
  <OutputItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Here's what you can borrow",
  dollars: 100,
};
