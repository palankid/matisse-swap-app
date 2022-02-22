import colors from "theme/colors";

const createLinkOverrides = () => ({
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: "Konnect",
        fontSize: "1.25rem",
        lineHeight: "2rem",
        color: colors.COLOR_BLUE,
        textDecoration: "none" as const,
        "&:hover": {
          textDecoration: "underline" as const,
        },
      },
    },
  },
});

export default createLinkOverrides;
