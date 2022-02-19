import React from "react";
import { Box, Grid } from "@mui/material";

import { poolItemStyle } from "./Pool.styles";

const Pool = () => (
  <Grid item>
    {Array(7)
      .fill("")
      .map(() => (
        <Box sx={poolItemStyle} />
      ))}
  </Grid>
);

export default Pool;
