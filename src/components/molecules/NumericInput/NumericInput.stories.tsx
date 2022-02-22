import React, { ChangeEventHandler, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "@mui/material";

import NumericInput from "./NumericInput";

export default {
  title: "components/molecules/NumericInput",
  component: NumericInput,
} as ComponentMeta<typeof NumericInput>;

const Template: ComponentStory<typeof NumericInput> = (args) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <Grid container gap={2}>
      <NumericInput
        {...args}
        value={value}
        helperText="Helper text"
        onChange={handleChange}
      />
      <NumericInput
        {...args}
        value={value}
        title="Title"
        onChange={handleChange}
      />
      <NumericInput
        {...args}
        value={value}
        error
        helperText="Helper text"
        title="Title"
        secondaryTitle="Secondary title"
        onChange={handleChange}
      />
      <NumericInput
        {...args}
        value={value}
        disabled
        helperText="Helper text"
        onChange={handleChange}
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const NumericRange = Template.bind({});
NumericRange.args = {
  min: 0,
  max: 100,
  step: 0.01,
};
