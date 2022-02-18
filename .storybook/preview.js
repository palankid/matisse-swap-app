import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import theme from "../src/theme/theme";
import GlobalFonts from "../src/theme/fonts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Story {...context} />
    </ThemeProvider>
  ),
];
