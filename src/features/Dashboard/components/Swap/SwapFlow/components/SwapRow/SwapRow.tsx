import React, { ReactNode } from "react";
import { Box, SelectChangeEvent, SxProps, Theme } from "@mui/material";

import { containerStyle, inputStyle, dropdownStyle } from "./SwapRow.styles";
import NumericInput from "components/molecules/NumericInput";
import TokenDropdown from "components/molecules/TokenDropdown";
import { TokenPropsType } from "features/Dashboard/store/dashboard.types";

interface SwapRowType {
  selection: TokenPropsType;
  dropdownTitle: string;
  inputTitle: string;
  secondaryTitle?: string;
  helperText?: string;
  errorText?: string;
  connected?: boolean;
  sx?: SxProps<Theme>;
  onTokenChange: (token: string) => void;
  onValueChange: (value: number) => void;
}

const SwapRow = ({
  selection,
  dropdownTitle,
  inputTitle,
  secondaryTitle,
  helperText,
  errorText,
  connected = false,
  sx,
  onTokenChange,
  onValueChange,
}: SwapRowType) => {
  const computedHelperText = selection.validation.value
    ? helperText
    : errorText;

  const handleTokenChange = (value: string | number) => {
    onTokenChange(value as string);
  };

  const handleValueChange = (value: number) => {
    onValueChange(value);
  };

  return (
    <Box sx={{ ...containerStyle, ...sx }}>
      <TokenDropdown
        sx={dropdownStyle}
        value={selection.token}
        title={dropdownTitle}
        onChange={handleTokenChange}
      />
      <NumericInput
        sx={inputStyle}
        min={0}
        max={100}
        step={0.1}
        value={selection.value}
        title={inputTitle}
        secondaryTitle={secondaryTitle}
        helperText={computedHelperText}
        error={!selection.validation.value}
        disabled={!connected}
        onChange={handleValueChange}
      />
    </Box>
  );
};

export default SwapRow;
