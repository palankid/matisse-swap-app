import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import createButtonOverrides from "./overrides/button.overrides";
import createTypograpghyOverrides from "./overrides/typography.overrides";
import createTabsOverrides from "./overrides/tabs.overrides";
import createIconButtonOverrides from "./overrides/iconButton.overrides";
import createLinkOverrides from "./overrides/link.overrides";

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: colors.COLOR_BLUE,
    },
    secondary: {
      main: colors.COLOR_BLACK_ASH,
    },
  },
  typography: createTypograpghyOverrides(defaultTheme),
  components: {
    ...createLinkOverrides(),
    ...createIconButtonOverrides(defaultTheme),
    ...createTabsOverrides(defaultTheme),
    ...createButtonOverrides(defaultTheme),
  },
});

export default theme;
