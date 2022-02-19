import React from "react";
import { useTheme, useMediaQuery as useMuiMediaQuery } from "@mui/material";

const useMediaQuery = () => {
  const theme = useTheme();
  const isXs = useMuiMediaQuery(theme.breakpoints.up("xs"));
  const isSm = useMuiMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMuiMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMuiMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMuiMediaQuery(theme.breakpoints.up("xl"));

  return { isXs, isSm, isMd, isLg, isXl };
};

export default useMediaQuery;
