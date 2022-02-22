import React from "react";
import { Link as MuiLink, LinkProps } from "@mui/material";

interface LinkType extends LinkProps {
  children: React.ReactNode;
}

const Link = ({ children, ...props }: LinkType) => {
  return <MuiLink {...props}>{children}</MuiLink>;
};

export default Link;
