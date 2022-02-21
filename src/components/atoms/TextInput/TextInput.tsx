import React from "react";

import { OutlinedTextFieldProps, TextField } from "@mui/material";

import { textInputStyle } from "./TextInput.styles";

interface TextInputType extends OutlinedTextFieldProps {}

const TextInput = ({ ...props }: TextInputType) => {
  return <TextField sx={textInputStyle} {...props} />;
};

export default TextInput;
