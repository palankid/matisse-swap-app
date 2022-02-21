import { SxProps, Theme } from "@mui/material";

import colors from "theme/colors";

export const textInputStyle = (theme: Theme) => ({
  "& .MuiInputBase-root": {
    borderRadius: 0,

    /* Input text */
    "& > .MuiInputBase-input": {
      color: colors.COLOR_DARK_ASH,
      fontWeight: 300,

      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
    },

    [theme.breakpoints.up("sm")]: {
      "& > .MuiInputBase-input": {
        fontSize: "1.25rem",
        lineHeight: "2rem",
        paddingTop: "1.1rem",
        paddingBottom: "1.1rem",
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& > .MuiInputBase-input": {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        paddingTop: "0.875rem",
        paddingBottom: "0.875rem",
      },
    },

    /* Default border & background */
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.COLOR_ASH,
    },

    /* Hovered border & background */
    "&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover": {
      backgroundColor: colors.COLOR_ASH_40,

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.COLOR_ASH,
      },
    },

    /* Focused border & background */
    "&.Mui-focused > .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: colors.COLOR_BLUE,
    },

    /* Error */
    "&.Mui-error": {
      "& .MuiInputBase-input": {
        color: colors.COLOR_RED,
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.COLOR_RED,
      },
    },

    /* Disabled  */
    "&.Mui-disabled": {
      backgroundColor: colors.COLOR_ASH_20,

      "& .MuiInputBase-input": {
        WebkitTextFillColor: "unset",
        color: colors.COLOR_ASH,
      },
    },

    /* Bottom helper text */
    "& + .MuiFormHelperText-root": {
      fontSize: "0.875rem",
      margin: "0.375rem 0 0",
      fontWeight: 300,

      "&.Mui-disabled": {
        color: colors.COLOR_ASH,
      },
    },
  },
});
