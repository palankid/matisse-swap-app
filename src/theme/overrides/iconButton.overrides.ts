import { Theme } from "@mui/material";
import colors from "theme/colors";

const createIconButtonOverrides = (defaultTheme: Theme) => ({
  MuiIconButton: {
    defaultProps: {
      color: "primary" as const,
    },
    styleOverrides: {
      root: ({ ownerState }: any) => {
        return {
          fontWeight: "300",
          textTransform: "capitalize" as const,
          borderRadius: 0,
          ...(ownerState.color === "primary" && {
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
          }),
          ...(ownerState.color === "secondary" && {
            color: `${colors.COLOR_BLUE} !important`,
            backgroundColor: "transparent !important",
            "&:hover": {
              color: `${colors.COLOR_BLACK_ASH} !important`,
            },
            "&:disabled": {
              color: `${colors.COLOR_DARK_ASH} !important`,
            },
          }),
        };
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
});

export default createIconButtonOverrides;
