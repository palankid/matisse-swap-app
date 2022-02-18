import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "components/atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button color="primary" />
    <Button color="secondary" />
    <Button color="neutral" />
  </>
);

export const Default = Template.bind({});
