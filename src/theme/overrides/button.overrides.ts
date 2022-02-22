import { Theme } from "@mui/material";
import colors from "theme/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "contained-light": true;
  }
}

const createButtonOverrides = (defaultTheme: Theme) => ({
  MuiButton: {
    defaultProps: {
      color: "primary" as const,
      variant: "contained" as const,
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontWeight: "300",
        textTransform: "capitalize" as const,
        borderRadius: 0,
      },
      sizeLarge: {
        [defaultTheme.breakpoints.down("sm")]: {
          padding: "0.875rem 1.5rem",
        },
        [defaultTheme.breakpoints.up("sm")]: {
          padding: "1.125rem 2rem",
        },
      },
      sizeMedium: {
        [defaultTheme.breakpoints.down("sm")]: {
          padding: "0.8rem 1rem",
        },
        [defaultTheme.breakpoints.up("sm")]: {
          padding: "0.75rem 1.5rem",
        },
      },
      sizeSmall: {
        [defaultTheme.breakpoints.down("sm")]: {
          padding: "0.65rem 1rem",
        },
        [defaultTheme.breakpoints.up("sm")]: {
          padding: "0.55rem 1rem",
        },
      },
    },
    variants: [
      {
        props: { variant: "contained" as const, disabled: true },
        style: {
          color: `${colors.COLOR_DARK_ASH} !important`,
          backgroundColor: `${colors.COLOR_ASH} !important`,
        },
      },
      {
        props: {
          variant: "contained-light" as const,
          color: "primary" as const,
          disabled: false,
        },
        style: {
          color: `${colors.COLOR_BLUE} !important`,
          backgroundColor: `${colors.COLOR_BLUE_20} !important`,
        },
      },
      {
        props: {
          variant: "contained-light" as const,
          color: "secondary" as const,
          disabled: false,
        },
        style: {
          color: `${colors.COLOR_BLACK_ASH} !important`,
          backgroundColor: `${colors.COLOR_ASH_60} !important`,
        },
      },
      {
        props: {
          variant: "contained-light" as const,
          disabled: true,
        },
        style: {
          color: `${colors.COLOR_DARK_ASH} !important`,
          backgroundColor: `${colors.COLOR_ASH_20} !important`,
        },
      },
      {
        props: {
          variant: "text" as const,
          color: "primary" as const,
          disabled: false,
        },
        style: {
          color: `${colors.COLOR_BLUE} !important`,
        },
      },
      {
        props: {
          variant: "text" as const,
          color: "secondary" as const,
          disabled: false,
        },
        style: {
          color: `${colors.COLOR_BLACK_ASH} !important`,
        },
      },
      {
        props: {
          variant: "text" as const,
          disabled: true,
        },
        style: {
          color: `${colors.COLOR_DARK_ASH} !important`,
        },
      },
    ],
  },
});

export default createButtonOverrides;
