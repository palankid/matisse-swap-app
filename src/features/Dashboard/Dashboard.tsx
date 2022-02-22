import React, { useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

import Pool from "./components/Pool";
import Swap from "./components/Swap";
import Tabs, { Tab } from "components/molecules/Tabs";

import {
  containerStyle,
  tabContainerStyle,
  contentContainerStyle,
  visibleTabStyle,
  hiddenTabStyle,
} from "./Dashboard.styles";

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
        <Grid container sx={tabIndex === 0 ? visibleTabStyle : hiddenTabStyle}>
          <Swap />
        </Grid>
        <Grid container sx={tabIndex === 1 ? visibleTabStyle : hiddenTabStyle}>
          <Pool />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
