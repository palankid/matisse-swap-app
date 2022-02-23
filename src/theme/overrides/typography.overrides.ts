import { Theme } from "@mui/material";
import colors from "theme/colors";

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

const createTypograpghyOverrides = (defaultTheme: Theme) => ({
  hero: {
    fontWeight: 400,
    fontFamily: "Taviraj, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Taviraj, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Taviraj, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Taviraj, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Taviraj, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_BLACK,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontFamily: "Konnect, sans-serif",
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
    fontFamily: "Konnect, sans-serif",
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
    fontFamily: "Konnect, sans-serif",
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
    fontWeight: 300,
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontWeight: 300,
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontWeight: 300,
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
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
    fontWeight: 300,
    fontFamily: "Konnect, sans-serif",
    color: colors.COLOR_DARK_ASH,
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1.125rem",
      lineHeight: "160%",
    },
    [defaultTheme.breakpoints.up("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "140%",
    },
  },
});

export default createTypograpghyOverrides;
