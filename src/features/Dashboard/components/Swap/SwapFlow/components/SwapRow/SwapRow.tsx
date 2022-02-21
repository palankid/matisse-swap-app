import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Input,
  Typography,
  Button,
  FormHelperText,
  TextField,
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

const SwapRow = () => {
  return (
    <Box sx={containerStyle}>
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
      <FormControl variant="standard" sx={inputStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormHelperText>Huto</FormHelperText>
          <FormHelperText>Huto222</FormHelperText>
        </div>
        <TextField
          type="number"
          InputProps={{
            inputProps: { min: 0, max: 100, step: 0.01 },
            endAdornment: (
              <Button variant="contained-light" color="primary">
                Max
              </Button>
            ),
          }}
          error={false}
          sx={{ borderRadius: "0 !important" }}
          helperText="fsdfdsfsdffsdfs"
        />
      </FormControl>
    </Box>
  );
};

export default SwapRow;
