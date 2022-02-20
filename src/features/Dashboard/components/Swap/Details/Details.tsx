import React from "react";
import { Link } from "@mui/material";

import SidePanel from "components/molecules/SidePanel";
import useConnect from "hooks/useConnect";

import { linkStyle } from "./Details.styles";

const Details = () => {
  const { connectedStatus, handleConnectClick } = useConnect();

  const title = {
    [+connectedStatus]: "Hint",
    [+!connectedStatus]: "Connect your wallet",
  }[1];

  const text = {
    [+connectedStatus && 0]:
      "Choose the amount you want to swap on your balance. You can check it on the top of the amount field that you want to swap :D",
    [+connectedStatus]:
      "You can choose any token on the list, if there is some missing you can try adding it by the <strong>contract address.</strong>",
    [+!connectedStatus]:
      "To start using the app, your wallet needs to be connected :)",
  }[1];

  return (
    <SidePanel title={title} text={text}>
      {!connectedStatus && (
        <Link
          sx={linkStyle}
          href="#"
          variant="buttonsmall"
          onClick={handleConnectClick}
        >
          Connect wallet
        </Link>
      )}
    </SidePanel>
  );
};

export default Details;
