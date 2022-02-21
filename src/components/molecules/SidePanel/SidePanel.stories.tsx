import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import i18next from "i18next";

import SidePanel from "./SidePanel";
import PanelInfo from "./PanelInfo";
import TransactionStatus from "./TransactionStatus";

export default {
  title: "components/molecules/SidePanel",
  component: SidePanel,
} as ComponentMeta<typeof SidePanel>;

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

const ConnectWalletTemplate: ComponentStory<typeof SidePanel> = () => {
  return (
    <SidePanel title="Connect your wallet">
      <PanelInfo
        textOrKey="To start using the app, your wallet needs to be connected :)"
        showLink={true}
        onLinkClick={() => {}}
      />
    </SidePanel>
  );
};

const ConnectedWalletTemplate: ComponentStory<typeof SidePanel> = () => {
  return (
    <SidePanel title="Hint">
      <PanelInfo
        textOrKey="You can choose any token on the list, if there is some missing you can try adding it by the <strong>contract address.</strong>"
        showLink={false}
        onLinkClick={() => {}}
      />
    </SidePanel>
  );
};

const TransactionStatusTemplate: ComponentStory<typeof SidePanel> = () => {
  return (
    <SidePanel title="Hint">
      <TransactionStatus
        detailsHintKey="Output is estimated. you will receive at least 99.95 AVAX or the transaction will revert."
        data={dataProvider}
      />
    </SidePanel>
  );
};

export const ConnectWallet = ConnectWalletTemplate.bind({});
export const ConnectedWallet = ConnectedWalletTemplate.bind({});
export const WithTransactionStatus = TransactionStatusTemplate.bind({});
