import React from "react";
import { Tabs as MuiTabs, TabsProps } from "@mui/material";

interface TabsType extends TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children, ...props }: TabsType) => {
  return <MuiTabs {...props}>{children}</MuiTabs>;
};

export default Tabs;
