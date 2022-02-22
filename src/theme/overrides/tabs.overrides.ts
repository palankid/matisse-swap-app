import { Theme } from "@mui/material";
import colors from "theme/colors";

export const createTabsOverrides = (defaultTheme: Theme) => ({
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
        textTransform: "capitalize" as const,
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
});

export default createTabsOverrides;
