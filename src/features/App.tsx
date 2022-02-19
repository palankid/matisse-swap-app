import React from "react";
import { Container } from "@mui/material";

import Header from "./Header";
import Dashboard from "./Dashboard";

import { backgroundStyle, backgroundCoverStyle } from "./App.styles";

const App = () => {
  return (
    <Container maxWidth={false} sx={backgroundStyle}>
      <Container maxWidth={false} sx={backgroundCoverStyle} />
      <Header />
      <Dashboard />
    </Container>
  );
};

export default App;
