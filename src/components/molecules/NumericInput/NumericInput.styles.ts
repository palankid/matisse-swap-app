import { Theme } from "@mui/material";

export const upperLabelsStyle = {
  fontWeight: 300,
  marginBottom: "0.3rem",
  minHeight: "1.5rem",
};

export const inputButtonContainertStyle = {
  height: "100%",
  backgroundColor: "red",
};

export const inputButtonStyle = (theme: Theme) => ({
  height: "2.5rem",

  [theme.breakpoints.up("sm")]: {
    marginRight: "0.5rem",
  },
});
