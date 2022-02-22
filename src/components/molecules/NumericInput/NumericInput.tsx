import React, { useEffect, useState } from "react";
import {
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
import Button from "components/atoms/Button";

interface NumericInputType
  extends Omit<OutlinedTextFieldProps, "variant" | "type" | "onChange"> {
  value?: number;
  title?: string;
  sx?: SxProps<Theme>;
  secondaryTitle?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
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
  onChange,
  ...props
}: NumericInputType) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleMaxClick = () => {
    setInputValue(max);
    onChange(max as number);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newValue = +event.target.value;
    setInputValue(newValue);
    onChange(newValue);
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
        onChange={handleChange}
        {...props}
      />
    </FormControl>
  );
};

export default NumericInput;
