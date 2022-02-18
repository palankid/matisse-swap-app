import React from "react";
import { SvgIcon } from "@mui/material";

import SwapIconSvg from "assets/icons/swap.svg";
import AvalancheIconSvg from "assets/icons/avalanche.svg";
import EthereumIconSvg from "assets/icons/ethereum.svg";
import PolygonIconSvg from "assets/icons/polygon.svg";

export const SwapIcon = ({ ...props }) => (
  <SvgIcon {...props}>
    <SwapIconSvg />
  </SvgIcon>
);

export const AvalancheIcon = ({ ...props }) => (
  <SvgIcon {...props}>
    <AvalancheIconSvg />
  </SvgIcon>
);

export const EthereumIcon = ({ ...props }) => (
  <SvgIcon {...props}>
    <EthereumIconSvg />
  </SvgIcon>
);

export const PolygonIcon = ({ ...props }) => (
  <SvgIcon {...props}>
    <PolygonIconSvg />
  </SvgIcon>
);
