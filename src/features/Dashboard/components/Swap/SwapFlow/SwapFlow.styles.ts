import { Theme } from "@mui/material";

export const swapFlowContainerStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 1rem",
  },
});

export const swapButtonContainerStyle = {
  padding: "2rem 0",
};

export const confirmSwapButtonStyle = (theme: Theme) => ({
  marginTop: "3rem",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export const firstRowStyle = {
  marginTop: "1.5rem",
};
