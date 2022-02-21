import React from "react";
import {
  Box,
  MenuItem,
  Select,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

import {
  AvalancheIcon,
  EthereumIcon,
  PolygonIcon,
} from "components/atoms/Icons/Icons";

import {
  containerStyle,
  inputStyle,
  dropdownStyle,
  dropdownItemStyle,
} from "./SwapRow.styles";
import NumericInput from "components/molecules/NumericInput";
import Dropdown from "components/atoms/Dropdown";
import TokenDropdown from "components/molecules/TokenDropdown";

interface SwapRowType {
  sx?: SxProps<Theme>;
}

const SwapRow = ({ sx }: SwapRowType) => {
  return (
    <Box sx={{ ...containerStyle, ...sx }}>
      <TokenDropdown sx={dropdownStyle} value="" />
      <NumericInput
        sx={inputStyle}
        min={0}
        max={100}
        step={0.01}
        title="Amount"
        secondaryTitle="Balance 1 ETH"
        helperText="Max to use all your funds"
      />
    </Box>
  );
};

export default SwapRow;
