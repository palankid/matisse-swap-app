import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import { firstItemStyle, secondItemStyle } from "./Swap.styles";
import Details from "./Details";

const Swap = () => {
  return (
    <>
      <Grid item maxWidth="sm" sx={firstItemStyle}>
        <Box>sfsdfdsfsdf</Box>
      </Grid>
      <Grid item maxWidth="sm" sx={secondItemStyle}>
        <Details />
      </Grid>
    </>
  );
};

export default Swap;
