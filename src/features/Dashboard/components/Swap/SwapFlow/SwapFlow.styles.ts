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

export const confirmSwapButtonStyle = {
  marginTop: "3rem",
};

export const firstRowStyle = {
  marginTop: "1.5rem",
};
