import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import "../src/locales/i18n";

import theme from "../src/theme/theme";
import { CssBaseline } from "@mui/material";

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
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  ),
];
