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
  selectStyle,
  dropdownItemStyle,
} from "./SwapRow.styles";
import NumericInput from "components/molecules/NumericInput";

interface SwapRowType {
  sx?: SxProps<Theme>;
}

const SwapRow = ({ sx }: SwapRowType) => {
  return (
    <Box sx={{ ...containerStyle, ...sx }}>
      <Select sx={selectStyle}>
        <MenuItem value={20}>
          <EthereumIcon />
          <Typography sx={dropdownItemStyle} variant="buttonmedium">
            ETH
          </Typography>
        </MenuItem>
        <MenuItem value={20}>
          <AvalancheIcon />
          <Typography sx={dropdownItemStyle} variant="buttonmedium">
            Matic
          </Typography>
        </MenuItem>
        <MenuItem value={20}>
          <PolygonIcon />
          <Typography sx={dropdownItemStyle} variant="buttonmedium">
            AVAX
          </Typography>
        </MenuItem>
      </Select>
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
