import React from "react";

import { Button, ButtonProps } from "@mui/material";

interface AppButtonType extends ButtonProps {}

const AppButton = ({ ...props }: AppButtonType) => {
  return <Button {...props}>hello worgggld</Button>;
};

export default AppButton;
