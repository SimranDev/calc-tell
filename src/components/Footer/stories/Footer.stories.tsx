import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "../Footer";

export default {
  title: "Footer/Footer",
  component: Footer,
  argTypes: {
    title: { control: "text" },
    checked: { control: "boolean" },
    name: { control: "text" },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
