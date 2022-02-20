import { Theme } from "@mui/material";
import colors from "theme/colors";

export const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flex: 1,
  paddingTop: "3rem",
  paddingBottom: "3.75rem",
  backgroundColor: colors.COLOR_ASH_10,
};

export const circleStyle = (theme: Theme) => ({
  backgroundColor: colors.COLOR_ASH_40,
  [theme.breakpoints.up("sm")]: {
    width: "6rem",
    height: "6rem",
    borderRadius: "3.5rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "3.25rem",
    height: "3.25rem",
    borderRadius: "1.75rem",
    marginBottom: "1rem",
  },
});

export const titleStyle = {
  color: colors.COLOR_BLACK,
  marginBottom: "1rem",
};

export const textStyle = {
  color: colors.COLOR_DARK_ASH,
  textAlign: "center",
  "& > strong": {
    fontWeight: "500",
    color: colors.COLOR_BLACK_ASH,
  },
} as const;
