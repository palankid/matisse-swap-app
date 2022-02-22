import React from "react";
import {
  Box,
  FormHelperText,
  FormControl,
  Grid,
  Select,
  SelectProps,
  SxProps,
  Theme,
} from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";

import {
  selectStyle,
  dropdownStyle,
  upperLabelsStyle,
} from "./Dropdown.styles";
import Typography from "../Typography";

export interface DropdownType extends Omit<SelectProps, "variant" | "label"> {
  title?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Dropdown = ({ title, sx = [], children, ...props }: DropdownType) => {
  return (
    <FormControl variant="standard" sx={sx}>
      <Grid display="flex" sx={upperLabelsStyle}>
        <FormHelperText>
          <Typography variant="helpertext">{title}</Typography>
        </FormHelperText>
      </Grid>
      <Select
        sx={selectStyle}
        variant="outlined"
        IconComponent={(props) => <KeyboardArrowDownRounded {...props} />}
        MenuProps={{
          PaperProps: { sx: dropdownStyle },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
