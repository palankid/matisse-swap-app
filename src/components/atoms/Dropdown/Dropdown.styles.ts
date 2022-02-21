import { Theme } from "@mui/material";
import colors from "theme/colors";

export const selectStyle = (theme: Theme) => ({
  "&.MuiInputBase-root": {
    width: "100%",
    borderRadius: 0,

    /* Dropdown text, dropdown icon */
    "& > .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      color: colors.COLOR_DARK_ASH,
      fontWeight: 300,
    },

    [theme.breakpoints.up("sm")]: {
      "& > .MuiSelect-select": {
        fontSize: "1.25rem",
        lineHeight: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "1.5rem",
      },
      "& > .MuiSelect-select > .MuiTypography-root": {
        fontSize: "1.25rem",
        lineHeight: "2rem",
        marginLeft: "1rem",
      },
      "& .MuiSelect-icon": {
        marginRight: "1.25rem",
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& > .MuiSelect-select": {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        paddingTop: "0.81rem",
        paddingBottom: "0.81rem",
        paddingLeft: "0.875rem",
      },
      "& > .MuiSelect-select > .MuiTypography-root": {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        marginLeft: "0.5rem",
      },
      "& .MuiSelect-icon": {
        marginRight: "0.5rem",
      },
    },

    /* Default border & background */
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.COLOR_ASH,
    },

    /* Hovered border & background */
    "&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover": {
      backgroundColor: colors.COLOR_ASH_40,

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.COLOR_ASH,
      },
    },

    /* Focused border & background */
    "&.Mui-focused > .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: colors.COLOR_BLUE,
    },

    /* Error */
    "&.Mui-error": {
      "& .MuiSelect-select": {
        color: colors.COLOR_RED,
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.COLOR_RED,
      },
    },

    /* Disabled  */
    "&.Mui-disabled": {
      backgroundColor: colors.COLOR_ASH_20,

      "& .MuiSelect-select": {
        WebkitTextFillColor: "unset",
        color: colors.COLOR_ASH,
      },

      "& .MuiSvgIcon-root:not(.MuiSelect-icon)": {
        opacity: 0.5,
      },
    },
  },
});

export const dropdownStyle = (theme: Theme) =>
  ({
    "&.MuiMenu-paper": {
      boxSizing: "border-box",
      borderRadius: 0,
      border: `1px solid ${colors.COLOR_BLUE}`,

      "& .MuiList-root": {
        padding: 0,
      },

      /* Menu items */
      "& .MuiMenuItem-root": {
        "&.Mui-selected": {
          backgroundColor: colors.COLOR_ASH_40,
        },

        "&:hover": {
          backgroundColor: colors.COLOR_ASH_20,
        },
      },

      [theme.breakpoints.up("sm")]: {
        minWidth: "15rem !important",

        "& .MuiMenuItem-root": {
          padding: "1.25rem 2rem",
        },

        "& .MuiTypography-root": {
          fontSize: "1.125rem",
          marginLeft: "1rem",
        },
      },

      [theme.breakpoints.down("sm")]: {
        minWidth: "12rem !important",

        "& .MuiMenuItem-root": {
          fontSize: "1rem",
          padding: "1rem",
        },

        "& .MuiTypography-root": {
          fontSize: "1.125rem",
          marginLeft: "0.5rem",
        },
      },
    },
  } as const);

export const upperLabelsStyle = {
  marginBottom: "0.3rem",
  minHeight: "1.5rem",
};
