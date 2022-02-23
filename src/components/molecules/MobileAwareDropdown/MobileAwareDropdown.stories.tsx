import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, MenuItem, SxProps, Theme } from "@mui/material";

import MobileAwareDropdown from "./MobileAwareDropdown";
import {
  AvalancheIcon,
  EthereumIcon,
  PolygonIcon,
} from "components/atoms/Icons/Icons";
import Typography from "components/atoms/Typography";

export default {
  title: "components/molecules/MobileAwareDropdown",
  component: MobileAwareDropdown,
} as ComponentMeta<typeof MobileAwareDropdown>;

interface DropdownTemplateType {
  value: number;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  error?: boolean;
  onChange: (value: string | number) => void;
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
    <MobileAwareDropdown
      {...rest}
      sx={sx}
      value={value}
      error={error}
      disabled={disabled}
      items={[
        {
          disabled: true,
          visible: false,
          value: 0,
          label: "Select",
          sx: { display: "none" },
        },
        {
          value: 11,
          label: (
            <>
              <EthereumIcon />
              <Typography variant="buttonmedium">ETH</Typography>
            </>
          ),
        },
        {
          value: 22,
          label: (
            <>
              <AvalancheIcon />
              <Typography variant="buttonmedium">Matic</Typography>
            </>
          ),
        },
        {
          value: 33,
          label: (
            <>
              <PolygonIcon />
              <Typography variant="buttonmedium">AVAX</Typography>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  );
};

const Template: ComponentStory<typeof MobileAwareDropdown> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (value: string | number) => {
    setValue(value as number);
  };

  return (
    <Grid container gap={2}>
      <DropdownTemplate
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
