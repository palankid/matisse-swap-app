import { Theme } from "@mui/material";
import colors from "theme/colors";

export const hintContainerStyle = {
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
    width: "7rem",
    height: "7rem",
    borderRadius: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "3.25rem",
    height: "3.25rem",
    borderRadius: "1.75rem",
  },
});
