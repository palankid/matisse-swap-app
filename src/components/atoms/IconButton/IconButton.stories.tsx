import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { SwapIcon } from "../Icons";

import IconButton from "./IconButton";

export default {
  title: "components/atoms/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <Grid container gap={2}>
      <IconButton size="large" color="primary">
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton size="large" color="primary">
        <SwapIcon />
      </IconButton>
      <IconButton size="large" color="primary" disabled>
        <SwapIcon />
      </IconButton>
      <IconButton size="large" color="secondary">
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton size="large" color="secondary">
        <SwapIcon />
      </IconButton>
      <IconButton size="large" color="secondary" disabled>
        <SwapIcon />
      </IconButton>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
