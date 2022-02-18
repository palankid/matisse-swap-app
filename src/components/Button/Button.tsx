import React from "react";

import { Button, ButtonProps } from "@mui/material";

export interface AppButtonType extends ButtonProps {
  children: React.ReactNode;
}

const AppButton = ({ children, ...props }: AppButtonType) => {
  return <Button {...props}>{children}</Button>;
};

export default AppButton;
