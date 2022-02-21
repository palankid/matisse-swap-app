import { Theme } from "@mui/material";

export const containerStyle = {
  display: "flex",

  width: "100%",
};

export const dropdownStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
});

export const inputStyle = {
  width: "70%",
  marginLeft: "1rem",
};

export const dropdownItemStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0.5rem",
  },
});
