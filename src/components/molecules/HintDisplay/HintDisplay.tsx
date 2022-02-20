import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { circleStyle, hintContainerStyle } from "./HintDisplay.styles";

const HintDisplay = () => {
  return (
    <Container sx={hintContainerStyle}>
      <Box sx={circleStyle}></Box>
      <Typography variant="h5">Hint</Typography>
      <Typography variant="body1">
        Choose the amount you want to swap on your balance. You can check it on
        the top of the amount field that you want to swap :D
      </Typography>
    </Container>
  );
};

export default HintDisplay;
