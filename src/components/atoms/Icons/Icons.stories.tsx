import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  AvalancheIcon,
  CloseIcon,
  EthereumIcon,
  PolygonIcon,
  SwapIcon,
} from "./Icons";
import { Grid } from "@mui/material";

export default {
  title: "components/atoms/Icons",
  component: React.Component,
} as ComponentMeta<typeof React.Component>;

const Template: ComponentStory<typeof React.Component> = (args) => {
  return (
    <Grid container gap={2}>
      <Grid item>
        <SwapIcon />
      </Grid>
      <Grid item>
        <SwapIcon color="primary" />
      </Grid>
      <Grid item>
        <SwapIcon sx={{ color: "red" }} />
      </Grid>
      <Grid item>
        <AvalancheIcon />
      </Grid>
      <Grid item>
        <EthereumIcon />
      </Grid>
      <Grid item>
        <PolygonIcon />
      </Grid>
      <Grid item>
        <CloseIcon />
      </Grid>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
