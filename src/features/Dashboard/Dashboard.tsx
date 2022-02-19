import React, { useState } from "react";
import { Container, Grid, Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

import {
  containerStyle,
  tabContainerStyle,
  contentContainerStyle,
} from "./Dashboard.styles";
import Pool from "./components/Pool";
import Swap from "./components/Swap";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabClick = (event: React.SyntheticEvent, value: number) => {
    setTabIndex(value);
  };

  return (
    <Container maxWidth="lg" sx={containerStyle}>
      <Box sx={tabContainerStyle}>
        <Tabs value={tabIndex} onChange={handleTabClick} variant="fullWidth">
          <Tab label="Swap" />
          <Tab label="Pool" />
        </Tabs>
      </Box>
      <Paper sx={contentContainerStyle}>
        <Grid container sx={{ display: tabIndex === 0 ? "flex" : "none" }}>
          <Swap />
        </Grid>
        <Grid container sx={{ display: tabIndex === 1 ? "flex" : "none" }}>
          <Pool />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
