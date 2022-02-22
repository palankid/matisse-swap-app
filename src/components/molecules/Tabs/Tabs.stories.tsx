import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "@mui/material";

import Tab from "./Tab";
import Tabs from "./Tabs";

export default {
  title: "components/molecules/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [active, setActive] = useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setActive(value);
  };

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Tabs value={active} onChange={handleChange}>
          <Tab label="Swap" />
          <Tab label="Pool" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Tabs value={active} onChange={handleChange} variant="fullWidth">
          <Tab label="Swap" />
          <Tab label="Pool" />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: "primary",
};
