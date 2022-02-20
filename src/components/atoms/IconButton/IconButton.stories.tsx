import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, IconButton } from "@mui/material";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { SwapIcon } from "../Icons";

export default {
  title: "components/atoms/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <Grid container gap={2}>
      <IconButton size="large">
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton size="large">
        <SwapIcon />
      </IconButton>
      <IconButton size="large" disabled>
        <SwapIcon />
      </IconButton>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
