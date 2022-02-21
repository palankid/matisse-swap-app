import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import SidePanel, {
  PanelInfo,
  TransactionStatus,
} from "components/molecules/SidePanel";
import useConnect from "hooks/useConnect";

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

  const setupComplete = true;

  const title = {
    [+connectedStatus]: t("hint"),
    [+setupComplete]: t("transaction details"),
    [+!connectedStatus]: t("connect your wallet"),
  }[1];

  const textKey = {
    [+connectedStatus && 0]: "choose amount text",
    [+connectedStatus]: "choose token text",
    [+!connectedStatus]: "disconnected text",
  }[1];

  return (
    <SidePanel title={title}>
      {!setupComplete && (
        <PanelInfo
          textOrKey={textKey}
          showLink={!connectedStatus}
          onLinkClick={handleConnectClick}
        />
      )}
      {setupComplete && (
        <TransactionStatus
          data={dataProvider}
          detailsHintKey="transaction details hint"
        />
      )}
    </SidePanel>
  );
};

export default Details;
