import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { AppButtonType } from "./Button";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

export default {
  title: "components/atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const tableStyles = {
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
  },
  width: "fit-content",
};

const createButtonRow = (
  args: AppButtonType,
  size: "small" | "medium" | "large",
  disabled: boolean
) => (
  <TableRow>
    <TableCell>
      <Button {...args} size={size} disabled={disabled}>
        Button
      </Button>
    </TableCell>
    <TableCell>
      <Button
        {...args}
        size={size}
        disabled={disabled}
        startIcon={<ImageOutlinedIcon />}
      >
        Button
      </Button>
    </TableCell>
    <TableCell>
      <Button
        {...args}
        size={size}
        disabled={disabled}
        endIcon={<ImageOutlinedIcon />}
      >
        Button
      </Button>
    </TableCell>
  </TableRow>
);

const Template: ComponentStory<typeof Button> = (args) => (
  <TableContainer>
    <Table sx={tableStyles}>
      <TableBody>
        {createButtonRow(args, "large", false)}
        {createButtonRow(args, "medium", false)}
        {createButtonRow(args, "small", false)}
        {createButtonRow(args, "large", true)}
        {createButtonRow(args, "medium", true)}
        {createButtonRow(args, "small", true)}
      </TableBody>
    </Table>
  </TableContainer>
);

export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  color: "primary",
  variant: "contained",
};

export const SecondaryContained = Template.bind({});
SecondaryContained.args = {
  color: "secondary",
  variant: "contained",
};

export const PrimaryContainedLight = Template.bind({});
PrimaryContainedLight.args = {
  color: "primary",
  variant: "contained-light",
};

export const SecondaryContainedLight = Template.bind({});
SecondaryContainedLight.args = {
  color: "secondary",
  variant: "contained-light",
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  color: "primary",
  variant: "text",
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  color: "secondary",
  variant: "text",
};
