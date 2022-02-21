import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  OutlinedTextFieldProps,
} from "@mui/material";

import TextInput from "components/atoms/TextInput";
import Typography from "components/atoms/Typography";

import { upperLabelsStyle } from "./NumericInput.styles";

interface NumericInputType extends OutlinedTextFieldProps {
  title?: string;
  secondaryTitle?: string;
}

const NumericInput = ({
  title,
  secondaryTitle,
  ...props
}: NumericInputType) => {
  return (
    <FormControl variant="standard">
      <Grid display="flex" justifyContent="space-between" sx={upperLabelsStyle}>
        <FormHelperText>
          <Typography variant="helpertext">{title}</Typography>
        </FormHelperText>
        <FormHelperText>
          <Typography variant="helpertext">{secondaryTitle}</Typography>
        </FormHelperText>
      </Grid>
      <TextInput
        type="number"
        InputProps={{
          inputProps: { min: 0, max: 100, step: 0.01 },
          endAdornment: (
            <Button variant="contained-light" color="primary">
              Max
            </Button>
          ),
        }}
        {...props}
      />
    </FormControl>
  );
};

export default NumericInput;
