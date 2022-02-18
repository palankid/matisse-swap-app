import { createTheme } from "@mui/material/styles";

import colors from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.COLOR_BLUE,
    },
    secondary: {
      main: colors.COLOR_BLACK_ASH,
    },
    neutral: {
      main: colors.COLOR_ASH,
    },
  },
  typography: {
    fontFamily: "Konnect, sans-serif",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {},
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
