import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, Link } from "@mui/material";

export default {
  title: "components/atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return (
    <Grid container gap={2} alignItems="center">
      <Link href="#" variant="buttonlarge">
        Default
      </Link>
      <Link href="#" variant="buttonsmall">
        Small Button Variant
      </Link>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
