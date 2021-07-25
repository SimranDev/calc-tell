import { ComponentMeta, ComponentStory } from "@storybook/react";
import OtherField from "../OtherIncomeField";

export default {
  title: "Input/InputFieldWithRemoveBtn",
  component: OtherField,
  argTypes: {},
} as ComponentMeta<typeof OtherField>;

const Template: ComponentStory<typeof OtherField> = (args) => (
  <OtherField {...args} />
);

export const Default = Template.bind({});
Default.args = {};
