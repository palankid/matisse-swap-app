import { Theme } from "@mui/material";

export const backgroundStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  minHeight: "100vh",
  background: `url("background.svg")`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  padding: 0,
  [theme.breakpoints.up("lg")]: {
    backgroundSize: "120%",
  },
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "-5rem -4rem",
    backgroundSize: "200%",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "-5rem -4rem",
    backgroundSize: "320%",
  },
});

export const backgroundCoverStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "#FFFFFFCC",
};
