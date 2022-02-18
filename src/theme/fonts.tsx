import React from "react";
import { Global, css } from "@emotion/core";

const fontWeights = [
  "Hairline",
  "Thin",
  "Light",
  "Regular",
  "Medium",
  "SemiBold",
  "Bold",
  "ExtraBold",
  "Black",
];

const fonts = fontWeights.reduce((acc, fontWeight, index) => {
  return (
    acc +
    `
    @font-face {
      font-family: "Konnect";
      font-style: normal;
      font-weight: ${(index + 1) * 100};
      font-display: swap;
      src: url(/fonts/Konnect-${fontWeight}.otf) format("opentype");
    }

    @font-face {
      font-family: "Konnect";
      font-style: italic;
      font-weight: ${(index + 1) * 100};
      font-display: swap;
      src: url(/fonts/Konnect-${fontWeight}.otf) format("opentype");
    }
  `
  );
}, "");

const GlobalFonts = () => {
  return (
    <Global
      styles={css`
        ${fonts}
      `}
    />
  );
};

export default GlobalFonts;
