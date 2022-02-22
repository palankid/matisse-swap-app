import React from "react";
import { Box, Container } from "@mui/material";

import Typography from "components/atoms/Typography";

import { circleStyle, containerStyle, titleStyle } from "./SidePanel.styles";

interface SidePanelType {
  children: React.ReactNode;
  title: string;
}

const SidePanel = ({ children, title }: SidePanelType) => {
  return (
    <Container sx={containerStyle}>
      <Box sx={circleStyle}></Box>
      <Typography sx={titleStyle} variant="subtitle1">
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default SidePanel;
