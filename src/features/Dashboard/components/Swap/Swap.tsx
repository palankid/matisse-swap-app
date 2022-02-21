import React from "react";
import { Grid } from "@mui/material";

import Details from "./Details";
import SwapFlow from "./SwapFlow";

import { detailsItemStyle, swapItemStyle } from "./Swap.styles";

const Swap = () => {
  return (
    <>
      <Grid item maxWidth="sm" sx={swapItemStyle}>
        <SwapFlow />
      </Grid>
      <Grid item maxWidth="sm" sx={detailsItemStyle}>
        <Details />
      </Grid>
    </>
  );
};

export default Swap;
