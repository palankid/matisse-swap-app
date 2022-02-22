import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import SidePanel, {
  PanelInfo,
  TransactionStatus,
} from "components/molecules/SidePanel";
import useConnect from "hooks/useConnect";
import { useSelector } from "react-redux";
import {
  areAllTokenPropsValid,
  areTokenSelectionsValid,
  areTokenValuesValid,
} from "features/Dashboard/store/dashboard.selectors";

const dataProvider = [
  {
    title: i18next.t("liquidity provider fee"),
    value: "0.00000005 ETH",
  },
  {
    title: i18next.t("price impact"),
    value: "0.00%",
  },
  {
    title: i18next.t("allowed slippage"),
    value: "0.50%",
  },
  {
    title: i18next.t("minimum received"),
    value: "99.98 AVAX",
  },
];

const Details = () => {
  const { t } = useTranslation();
  const { connectedStatus, handleConnectClick } = useConnect();
  const tokenSelectionsValid = useSelector(areTokenSelectionsValid);
  const tokenValuesValid = useSelector(areTokenValuesValid);
  const allTokenPropsValid = useSelector(areAllTokenPropsValid);

  const title = {
    [+allTokenPropsValid]: t("transaction details"),
    [+(!tokenSelectionsValid || !tokenValuesValid)]: t("hint"),
    [+!connectedStatus]: t("connect your wallet"),
  }[1];

  const textKey = {
    [1]: "",
    [+!tokenValuesValid]: "choose amount text",
    [+!tokenSelectionsValid]: "choose token text",
    [+!connectedStatus]: "disconnected text",
  }[1];

  return (
    <SidePanel title={title}>
      {!allTokenPropsValid || !connectedStatus ? (
        <PanelInfo
          textOrKey={textKey}
          showLink={!connectedStatus}
          onLinkClick={handleConnectClick}
        />
      ) : (
        <TransactionStatus
          data={dataProvider}
          detailsHintKey="transaction details hint"
        />
      )}
    </SidePanel>
  );
};

export default Details;
