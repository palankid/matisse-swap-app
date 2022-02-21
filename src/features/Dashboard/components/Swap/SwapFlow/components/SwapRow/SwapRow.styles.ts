import { Theme } from "@mui/material";

export const containerStyle = {
  display: "flex",
  marginTop: "1.5rem",
  width: "100%",
};

export const selectStyle = {
  width: "30%",
};

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
