import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";
import { Grid } from "@mui/material";

export default {
  title: "components/atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  return (
    <Grid container gap={2}>
      <TextInput
        {...args}
        value="Default text input"
        helperText="Helper text"
      />
      <TextInput {...args} value="Error text" error helperText="Helper text" />
      <TextInput
        {...args}
        value="Disabled text"
        disabled
        helperText="Helper text"
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
