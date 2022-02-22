import React from "react";
import { Tab as MuiTab, TabProps } from "@mui/material";

interface TabType extends TabProps {}

const Tabs = ({ ...props }: TabType) => {
  return <MuiTab {...props} />;
};

export default Tabs;
