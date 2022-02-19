import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";
import { shadows } from "@mui/system";

import colors from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "contained-light": true;
  }
  /* interface ButtonPropsColorOverrides {
    neutral: true;
  } */
}

/* declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
} */

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: colors.COLOR_BLUE,
    },
    secondary: {
      main: colors.COLOR_BLACK_ASH,
    },
  },
  typography: {
    fontFamily: "Konnect, sans-serif",
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "unset",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: "300",
          textTransform: "capitalize",
          [defaultTheme.breakpoints.down("sm")]: {
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            padding: "0.625rem 1rem",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "1.25rem",
            lineHeight: "2rem",
            padding: "0.75rem 1.5rem",
          },
          backgroundColor: colors.COLOR_ASH_20,
          color: colors.COLOR_ASH,
          "&.Mui-selected": {
            backgroundColor: colors.COLOR_BLACK_ASH,
            color: colors.COLOR_WHITE,
          },
          "&:hover": {
            backgroundColor: colors.COLOR_DARK_ASH,
            color: colors.COLOR_WHITE,
          },
          "&:active": {
            backgroundColor: colors.COLOR_ASH,
            color: colors.COLOR_DARK_ASH,
          },
          "&:disabled": {
            backgroundColor: colors.COLOR_ASH_20,
            color: colors.COLOR_ASH,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: "300",
          textTransform: "capitalize",
          borderRadius: 0,
        },
        sizeLarge: {
          [defaultTheme.breakpoints.down("sm")]: {
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            padding: "0.875rem 1.5rem",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            padding: "1.125rem 2rem",
          },
        },
        sizeMedium: {
          [defaultTheme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            lineHeight: "1.25rem",
            padding: "0.75rem 1rem",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            padding: "0.75rem 1.5rem",
          },
        },
        sizeSmall: {
          [defaultTheme.breakpoints.down("sm")]: {
            fontSize: "0.875rem",
            lineHeight: "1.125rem",
            padding: "0.625rem 1rem",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "1rem",
            lineHeight: "1.25rem",
            padding: "0.625rem 1rem",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", disabled: true },
          style: {
            color: `${colors.COLOR_DARK_ASH} !important`,
            backgroundColor: `${colors.COLOR_ASH} !important`,
          },
        },
        {
          props: {
            variant: "contained-light",
            color: "primary",
            disabled: false,
          },
          style: {
            color: `${colors.COLOR_BLUE} !important`,
            backgroundColor: `${colors.COLOR_BLUE_20} !important`,
          },
        },
        {
          props: {
            variant: "contained-light",
            color: "secondary",
            disabled: false,
          },
          style: {
            color: `${colors.COLOR_BLACK_ASH} !important`,
            backgroundColor: `${colors.COLOR_ASH_60} !important`,
          },
        },
        {
          props: {
            variant: "contained-light",
            disabled: true,
          },
          style: {
            color: `${colors.COLOR_DARK_ASH} !important`,
            backgroundColor: `${colors.COLOR_ASH_20} !important`,
          },
        },
        {
          props: {
            variant: "text",
            color: "primary",
            disabled: false,
          },
          style: {
            color: `${colors.COLOR_BLUE} !important`,
          },
        },
        {
          props: {
            variant: "text",
            color: "secondary",
            disabled: false,
          },
          style: {
            color: `${colors.COLOR_BLACK_ASH} !important`,
          },
        },
        {
          props: {
            variant: "text",
            disabled: true,
          },
          style: {
            color: `${colors.COLOR_DARK_ASH} !important`,
          },
        },
      ],
    },
  },
});

export default theme;
