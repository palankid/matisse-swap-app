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

export const buttonStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    marginRight: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "1rem",
    "& > .MuiButton-startIcon": {
      marginRight: "1rem",
    },
    "& > .MuiButton-endIcon": {
      marginLeft: "1rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.75rem",
  },
});
