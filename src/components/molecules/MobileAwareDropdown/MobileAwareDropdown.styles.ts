import colors from "theme/colors";

export const drawerStyle = {
  "& .MuiBackdrop-root": {
    backgroundColor: colors.COLOR_ASH_80,
  },

  "& .MuiList-root": {
    padding: "0.5rem 0 4rem 0",

    "& .MuiMenuItem-root": {
      padding: "1.5rem",

      "&:hover": {
        backgroundColor: colors.COLOR_ASH_20,
      },

      "&.Mui-selected": {
        backgroundColor: colors.COLOR_ASH_40,
      },

      "& .MuiTypography-root": {
        marginLeft: "0.5rem",
      },
    },
  },
};

export const closeIconContainerStyle = () => ({
  marginTop: "2rem",
  marginRight: "2.5rem",
  color: colors.COLOR_BLUE,
  cursor: "pointer",
});
