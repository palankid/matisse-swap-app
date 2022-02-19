import React from "react";
import { Button, Container, Grid } from "@mui/material";
import useMediaQuery from "hooks/useMediaQuery";

import MatisseSvg from "../../assets/logo.svg";

import { headerContainerStyle } from "./Header.styles";

const Header = () => {
  const { isSm } = useMediaQuery();

  return (
    <Container
      maxWidth={false}
      sx={headerContainerStyle}
      style={{ position: "absolute" }}
    >
      <MatisseSvg
        viewBox="0 0 75 20"
        width={isSm ? 150 : 75}
        height={isSm ? 40 : 20}
      />
      <Grid>
        <Button size="large">Button1</Button>
        <Button sx={{ marginLeft: "2rem" }} size="large">
          Button2
        </Button>
      </Grid>
    </Container>
  );
};

export default Header;
