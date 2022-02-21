import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "@mui/material";

import NumericInput from "./NumericInput";

export default {
  title: "components/molecules/NumericInput",
  component: NumericInput,
} as ComponentMeta<typeof NumericInput>;

const Template: ComponentStory<typeof NumericInput> = (args) => {
  return (
    <Grid container gap={2}>
      <NumericInput
        {...args}
        value="Default text input"
        helperText="Helper text"
        title="Title"
      />
      <NumericInput
        {...args}
        value="Error text"
        error
        helperText="Helper text"
        title="Title"
        secondaryTitle="Secondary title"
      />
      <NumericInput
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
