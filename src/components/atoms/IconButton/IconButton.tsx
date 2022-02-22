import React from "react";
import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material";

interface IconButtonType extends IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonType) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
