import React from "react";
import { Button, Container, Grid } from "@mui/material";
import useMediaQuery from "hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";

import { getConnectedStatus } from "features/store/main.selectors";

import MatisseSvg from "../../assets/logo.svg";
import { headerContainerStyle } from "./Header.styles";
import { updateConnectedStatus } from "features/store/main.slice";

const Header = () => {
  const connectedStatus = useSelector(getConnectedStatus);
  const dispatch = useDispatch();
  const { isSm } = useMediaQuery();

  const handleConnectClick = () => {
    dispatch(updateConnectedStatus(true));
  };

  const handleDisconnectClick = () => {
    dispatch(updateConnectedStatus(false));
  };

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
        {!connectedStatus && (
          <Button size="large" onClick={handleConnectClick}>
            Connect wallet
          </Button>
        )}
        {connectedStatus && (
          <>
            <Button size="large" onClick={handleDisconnectClick}>
              Disconnect
            </Button>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Header;
