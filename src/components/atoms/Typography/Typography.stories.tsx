import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "components/atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  return (
    <>
      <Typography variant="hero">Hero</Typography>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
      <Typography variant="subtitle1">subtitle1 text</Typography>
      <Typography variant="body1">body1 text</Typography>
      <Typography variant="body2">body2 text</Typography>
      <Typography variant="body1bold">body1 bold text</Typography>
      <Typography variant="body2bold">body2 bold text</Typography>
      <Typography variant="buttonlarge" sx={{ display: "block" }}>
        button large text
      </Typography>
      <Typography variant="buttonmedium" sx={{ display: "block" }}>
        button medium text
      </Typography>
      <Typography variant="buttonsmall" sx={{ display: "block" }}>
        button small text
      </Typography>
      <Typography variant="caption" sx={{ display: "block" }}>
        caption text
      </Typography>
      <Typography variant="inputlabel" sx={{ display: "block" }}>
        input label text
      </Typography>
      <Typography variant="helpertext" sx={{ display: "block" }}>
        helper text text
      </Typography>
      <Typography variant="inputtext" sx={{ display: "block" }}>
        input text text
      </Typography>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
