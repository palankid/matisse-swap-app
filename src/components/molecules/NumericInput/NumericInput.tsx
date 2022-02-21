import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  OutlinedTextFieldProps,
  InputAdornment,
  SxProps,
  Theme,
} from "@mui/material";

import TextInput from "components/atoms/TextInput";
import Typography from "components/atoms/Typography";

import { upperLabelsStyle, inputButtonStyle } from "./NumericInput.styles";

interface NumericInputType
  extends Omit<OutlinedTextFieldProps, "variant" | "type"> {
  value?: number;
  title?: string;
  sx?: SxProps<Theme>;
  secondaryTitle?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const NumericInput = ({
  value,
  title,
  sx,
  secondaryTitle,
  disabled = false,
  min,
  max,
  step,
  ...props
}: NumericInputType) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleMaxClick = () => {
    setInputValue(max);
  };

  return (
    <FormControl variant="standard" sx={sx}>
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
        variant="outlined"
        autoComplete="off"
        InputProps={{
          inputProps: { min, max, step },
          endAdornment: (
            <InputAdornment position="end">
              <Button
                disabled={disabled || !max}
                sx={inputButtonStyle}
                variant="contained-light"
                color="primary"
                size="small"
                onClick={handleMaxClick}
              >
                Max
              </Button>
            </InputAdornment>
          ),
        }}
        value={inputValue}
        disabled={disabled}
        {...props}
      />
    </FormControl>
  );
};

export default NumericInput;
