import React from "react";
import i18next from "i18next";

import {
  AvalancheIcon,
  EthereumIcon,
  PolygonIcon,
} from "components/atoms/Icons/Icons";
import Typography from "components/atoms/Typography";

import { MobileAwareDropdownType } from "../MobileAwareDropdown/MobileAwareDropdown";
import MobileAwareDropdown from "../MobileAwareDropdown";
import { Tokens } from "types/Tokens.types";

interface TokenDropdownType extends Omit<MobileAwareDropdownType, "items"> {}

const dropdownItems = [
  {
    disabled: true,
    visible: false,
    value: 0,
    label: i18next.t("select"),
    sx: { display: "none" },
  },
  {
    value: Tokens.eth,
    label: (
      <>
        <EthereumIcon />
        <Typography variant="buttonmedium">{Tokens.eth}</Typography>
      </>
    ),
  },
  {
    value: Tokens.matic,
    label: (
      <>
        <AvalancheIcon />
        <Typography variant="buttonmedium">{Tokens.matic}</Typography>
      </>
    ),
  },
  {
    value: Tokens.avax,
    label: (
      <>
        <PolygonIcon />
        <Typography variant="buttonmedium">{Tokens.avax}</Typography>
      </>
    ),
  },
];

const TokenDropdown = ({ ...props }: TokenDropdownType) => {
  return <MobileAwareDropdown {...props} items={dropdownItems} />;
};

export default TokenDropdown;
