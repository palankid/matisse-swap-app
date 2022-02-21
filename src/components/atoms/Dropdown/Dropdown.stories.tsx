import React, { ReactNode, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Grid,
  MenuItem,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

import Dropdown from "./Dropdown";
import { AvalancheIcon, EthereumIcon, PolygonIcon } from "../Icons/Icons";
import Typography from "../Typography";

export default {
  title: "components/atoms/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

interface DropdownTemplateType {
  value: number;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  error?: boolean;
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

const DropdownTemplate = ({
  value,
  disabled = false,
  sx,
  error = false,
  onChange,
  ...rest
}: DropdownTemplateType) => {
  return (
    <Dropdown
      {...rest}
      sx={sx}
      value={value}
      error={error}
      disabled={disabled}
      onChange={onChange}
    >
      <MenuItem disabled value={0} sx={{ display: "none" }}>
        Select
      </MenuItem>
      <MenuItem value={1}>
        <EthereumIcon />
        <Typography variant="buttonmedium">ETH</Typography>
      </MenuItem>
      <MenuItem value={2}>
        <AvalancheIcon />
        <Typography variant="buttonmedium">Matic</Typography>
      </MenuItem>
      <MenuItem value={3}>
        <PolygonIcon />
        <Typography variant="buttonmedium">AVAX</Typography>
      </MenuItem>
    </Dropdown>
  );
};

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setValue(event.target.value as number);
  };

  return (
    <Grid container gap={2}>
      <Grid item lg={3} xs={6}>
        <DropdownTemplate
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item lg={3} xs={6}>
        <DropdownTemplate
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          disabled
        />
      </Grid>
      <Grid item lg={3} xs={6}>
        <DropdownTemplate
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          error
        />
      </Grid>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
