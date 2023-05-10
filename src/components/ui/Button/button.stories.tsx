import { ComponentStory, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  size: "large",
};
