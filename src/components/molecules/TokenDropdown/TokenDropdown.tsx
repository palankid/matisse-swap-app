import React from "react";
import { MenuItem } from "@mui/material";

import Dropdown from "components/atoms/Dropdown";
import {
  AvalancheIcon,
  EthereumIcon,
  PolygonIcon,
} from "components/atoms/Icons/Icons";
import Typography from "components/atoms/Typography";
import { DropdownType } from "components/atoms/Dropdown/Dropdown";

interface TokenDropdownType extends Omit<DropdownType, "children"> {}

const TokenDropdown = ({ ...props }: TokenDropdownType) => {
  return (
    <Dropdown {...props}>
      <MenuItem disabled value="" sx={{ display: "none" }}>
        Select
      </MenuItem>
      <MenuItem value="eth">
        <EthereumIcon />
        <Typography variant="buttonmedium">ETH</Typography>
      </MenuItem>
      <MenuItem value="matic">
        <AvalancheIcon />
        <Typography variant="buttonmedium">Matic</Typography>
      </MenuItem>
      <MenuItem value="avax">
        <PolygonIcon />
        <Typography variant="buttonmedium">AVAX</Typography>
      </MenuItem>
    </Dropdown>
  );
};

export default TokenDropdown;