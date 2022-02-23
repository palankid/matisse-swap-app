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

const fonts = fontWeights.reduce(
  (acc, fontWeight, index) => {
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
  },
  `
  @font-face {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Taviraj-Regular.ttf) format("truetype");
  }
`
);

export default {
  MuiCssBaseline: {
    styleOverrides: `
      ${fonts}

      :root {
        fontFamily: "Konnect, sans-serif",
      }
    }`,
  },
};
