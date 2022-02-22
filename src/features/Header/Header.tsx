import React from "react";
import { Container, Grid, IconButton } from "@mui/material";
import useMediaQuery from "hooks/useMediaQuery";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

import { headerContainerStyle, buttonStyle } from "./Header.styles";
import { EthereumIcon } from "components/atoms/Icons/Icons";
import Button from "components/atoms/Button";
import useConnect from "hooks/useConnect";

import MatisseSvg from "../../assets/logo.svg";

const Header = () => {
  const { connectedStatus, handleConnectClick, handleDisconnectClick } =
    useConnect();
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
