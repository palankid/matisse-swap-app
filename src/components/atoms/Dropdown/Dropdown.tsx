import React from "react";
import { Select, SelectProps, SxProps, Theme } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";

import { selectStyle, dropdownStyle } from "./Dropdown.styles";

interface DropdownType extends SelectProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Dropdown = ({ sx = [], children, ...props }: DropdownType) => {
  const combinedStyles = [selectStyle, ...(Array.isArray(sx) ? sx : [sx])];

  return (
    <Select
      sx={combinedStyles}
      IconComponent={(props) => <KeyboardArrowDownRounded {...props} />}
      MenuProps={{ PaperProps: { sx: dropdownStyle } }}
      {...props}
    >
      {children}
    </Select>
  );
};

export default Dropdown;
