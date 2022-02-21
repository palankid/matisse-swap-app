import { Theme } from "@mui/material";

import colors from "theme/colors";

export const linkStyle = (theme: Theme) => ({
  [theme.breakpoints.up("sm")]: {
    marginTop: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
  },
});

export const textStyle = {
  textAlign: "center",
  "& > strong": {
    fontWeight: "500",
    color: colors.COLOR_BLACK_ASH,
  },
} as const;
