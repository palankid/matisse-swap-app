import React from "react";

import { Button, ButtonProps, ButtonPropsSizeOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import Typography from "../Typography";

export interface AppButtonType extends ButtonProps {
  children: React.ReactNode;
  size: OverridableStringUnion<
    "small" | "medium" | "large",
    ButtonPropsSizeOverrides
  >;
}

const AppButton = ({ children, size, ...props }: AppButtonType) => {
  return (
    <Button {...props} size={size}>
      <Typography variant={`button${size}`}>{children}</Typography>
    </Button>
  );
};

export default AppButton;
