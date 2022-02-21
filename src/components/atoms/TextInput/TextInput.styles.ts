import { Theme } from "@mui/material";

import colors from "theme/colors";

export const textInputStyle = (theme: Theme) => ({
  "&.MuiFormControl-root > .MuiInputBase-root": {
    borderRadius: 0,

    /* Input text */
    "& > .MuiInputBase-input": {
      color: colors.COLOR_DARK_ASH,
      fontWeight: 300,
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
    "&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: colors.COLOR_ASH,
        backgroundColor: colors.COLOR_ASH_40,
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
      "& .MuiInputBase-input": {
        ["-webkit-text-fill-color"]: "unset",
        color: colors.COLOR_ASH_40,
        backgroundColor: colors.COLOR_ASH_20,
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
