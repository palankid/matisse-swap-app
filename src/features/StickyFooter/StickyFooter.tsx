import React from "react";
import { useSelector } from "react-redux";
import { AppBar } from "@mui/material";
import { useTranslation } from "react-i18next";

import Button from "components/atoms/Button";
import useMediaQuery from "hooks/useMediaQuery";
import useConnect from "hooks/useConnect";
import { areAllTokenPropsValid } from "features/Dashboard/store/dashboard.selectors";

import { stickyFooterContainerStyle, buttonStyle } from "./StickyFooter.styles";

const StickyFooter = () => {
  const { t } = useTranslation();
  const { isMd } = useMediaQuery();
  const { connectedStatus } = useConnect();
  const allTokenPropsValid = useSelector(areAllTokenPropsValid);

  if (isMd) return null;

  return (
    <AppBar sx={stickyFooterContainerStyle} position="fixed" color="primary">
      <Button
        sx={buttonStyle}
        disabled={!connectedStatus || !allTokenPropsValid}
        size="large"
        color="primary"
      >
        {t("swap")}
      </Button>
    </AppBar>
  );
};

export default StickyFooter;
