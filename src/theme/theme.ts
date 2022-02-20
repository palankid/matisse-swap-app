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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    hero: React.CSSProperties;
    body1bold: React.CSSProperties;
    body2bold: React.CSSProperties;
    buttonlarge: React.CSSProperties;
    buttonmedium: React.CSSProperties;
    buttonsmall: React.CSSProperties;
    inputlabel: React.CSSProperties;
    helpertext: React.CSSProperties;
    inputtext: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    hero?: React.CSSProperties;
    body1bold?: React.CSSProperties;
    body2bold?: React.CSSProperties;
    buttonlarge?: React.CSSProperties;
    buttonmedium?: React.CSSProperties;
    buttonsmall?: React.CSSProperties;
    inputlabel?: React.CSSProperties;
    helpertext?: React.CSSProperties;
    inputtext?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hero: true;
    body1bold: true;
    body2bold: true;
    buttonlarge: true;
    buttonmedium: true;
    buttonsmall: true;
    inputlabel: true;
    helpertext: true;
    inputtext: true;
    subtitle2: false;
  }
}

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
    hero: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "6rem",
        lineHeight: "120%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "9rem",
        lineHeight: "120%",
      },
    },
    h1: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "4.5rem",
        lineHeight: "120%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "6rem",
        lineHeight: "120%",
      },
    },
    h2: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "4rem",
        lineHeight: "120%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "4.5rem",
        lineHeight: "120%",
      },
    },
    h3: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "3rem",
        lineHeight: "140%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "4rem",
        lineHeight: "120%",
      },
    },
    h4: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        lineHeight: "140%",
      },
    },
    h5: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "2rem",
        lineHeight: "160%",
      },
    },
    h6: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
        lineHeight: "160%",
      },
    },
    subtitle1: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
      },
    },
    subtitle2: undefined,
    body1: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
      },
    },
    body2: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
      },
    },
    body1bold: {
      fontWeight: 500,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
      },
    },
    body2bold: {
      fontWeight: 500,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
      },
    },
    buttonlarge: {
      fontWeight: 300,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "140%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "140%",
      },
    },
    buttonmedium: {
      fontWeight: 300,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "140%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "140%",
      },
    },
    buttonsmall: {
      fontWeight: 300,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "140%",
      },
    },
    caption: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.75rem",
        lineHeight: "160%",
      },
    },
    inputlabel: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
      },
    },
    helpertext: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
      },
    },
    inputtext: {
      fontWeight: 400,
      fontFamily: "Konnect",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "140%",
      },
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Konnect",
          fontSize: "1.25rem",
          lineHeight: "2rem",
          color: colors.COLOR_BLUE,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          fontWeight: "300",
          textTransform: "capitalize",
          borderRadius: 0,
          color: `${colors.COLOR_BLUE} !important`,
          backgroundColor: `${colors.COLOR_BLUE_20} !important`,
          "&:hover": {
            color: `${colors.COLOR_BLACK_ASH} !important`,
            backgroundColor: `${colors.COLOR_ASH_60} !important`,
          },
          "&:disabled": {
            color: `${colors.COLOR_DARK_ASH} !important`,
            backgroundColor: `${colors.COLOR_ASH_20} !important`,
          },
        },
        sizeLarge: {
          [defaultTheme.breakpoints.down("sm")]: {
            padding: "0.75rem",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            padding: "1.25rem",
          },
        },
      },
    },
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
