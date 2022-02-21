import React from "react";

import {
  OutlinedTextFieldProps,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";

import { textInputStyle } from "./TextInput.styles";

interface TextInputType extends OutlinedTextFieldProps {
  sx?: SxProps<Theme>;
}

const TextInput = ({ sx = [], ...props }: TextInputType) => {
  const combinedStyles = [textInputStyle, ...(Array.isArray(sx) ? sx : [sx])];

  return <TextField sx={combinedStyles} {...props} />;
};

export default TextInput;
