import React from "react";
import { Container, Grid, IconButton } from "@mui/material";
import useMediaQuery from "hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

import { getConnectedStatus } from "features/store/main.selectors";
import { headerContainerStyle, buttonStyle } from "./Header.styles";
import { updateConnectedStatus } from "features/store/main.slice";

import { EthereumIcon } from "components/atoms/Icons/Icons";
import Button from "components/atoms/Button";

import MatisseSvg from "../../assets/logo.svg";

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
          <Button size={isSm ? "large" : "medium"} onClick={handleConnectClick}>
            Connect wallet
          </Button>
        )}
        {connectedStatus && (
          <>
            <Button
              color="secondary"
              variant="contained-light"
              size={isSm ? "large" : "medium"}
              sx={buttonStyle}
              startIcon={<EthereumIcon />}
              endIcon={<RepeatRoundedIcon />}
            >
              0x3452...3d27
            </Button>
            <IconButton size="large" onClick={handleDisconnectClick}>
              <PowerSettingsNewIcon />
            </IconButton>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Header;
