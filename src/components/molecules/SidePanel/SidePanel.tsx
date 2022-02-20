import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { transformTextIntoReactNode } from "utils/react.utils";

import {
  circleStyle,
  containerStyle,
  titleStyle,
  textStyle,
} from "./SidePanel.styles";

interface SidePanelType {
  children: React.ReactNode;
  title: string;
  text?: string;
}

const SidePanel = ({ children, title, text }: SidePanelType) => {
  return (
    <Container sx={containerStyle}>
      <Box sx={circleStyle}></Box>
      <Typography sx={titleStyle} variant="subtitle1">
        {title}
      </Typography>
      {text && (
        <Typography sx={textStyle} variant="body2">
          {transformTextIntoReactNode(text)}
        </Typography>
      )}
      {children}
    </Container>
  );
};

export default SidePanel;
