import React from "react";
import { Tab as MuiTab, TabProps } from "@mui/material";
import Typography from "components/atoms/Typography";

interface TabType extends TabProps {}

const Tabs = ({ ...props }: TabType) => {
  return (
    <MuiTab
      {...props}
      label={<Typography variant="buttonlarge">{props.label}</Typography>}
    />
  );
};

export default Tabs;
