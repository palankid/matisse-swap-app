import { Theme } from "@mui/material";

export const containerStyle = {
  display: "flex",

  width: "100%",
};

export const dropdownStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
});

export const inputStyle = {
  width: "70%",
  marginLeft: "1rem",
};
