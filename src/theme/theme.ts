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
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "6rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "9rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "4.5rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "6rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h2: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "4rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "4.5rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h3: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "3rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "4rem",
        lineHeight: "120%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h4: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h5: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "2rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    h6: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    subtitle1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    subtitle2: undefined,
    body1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
        marginBottom: "1.5rem",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
        marginBottom: "2rem",
      },
    },
    body2: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
        marginBottom: "1rem",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
        marginBottom: "1.5rem",
      },
    },
    body1bold: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
        fontWeight: 500,
        fontFamily: "Konnect",
        marginBottom: "1.5rem",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: 500,
        fontFamily: "Konnect",
        marginBottom: "2rem",
      },
    },
    body2bold: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
        fontWeight: 500,
        fontFamily: "Konnect",
        marginBottom: "1rem",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "160%",
        fontWeight: 500,
        fontFamily: "Konnect",
        marginBottom: "1.5rem",
      },
    },
    buttonlarge: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    buttonmedium: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    buttonsmall: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    caption: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.75rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    inputlabel: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    helpertext: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
    inputtext: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "160%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "140%",
        fontWeight: 400,
        fontFamily: "Konnect",
      },
    },
  },
  components: {
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
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            padding: "0.775rem 1.5rem",
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
            padding: "0.875rem 1rem",
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
            padding: "0.675rem 1rem",
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
