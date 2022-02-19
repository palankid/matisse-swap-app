import { Theme } from "@mui/material";

export const headerContainerStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  left: 0,
  top: 0,
  right: 0,
  [theme.breakpoints.up("sm")]: {
    padding: "1.5rem 3rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
});
