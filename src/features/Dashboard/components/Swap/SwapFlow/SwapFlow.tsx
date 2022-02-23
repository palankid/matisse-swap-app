import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "components/atoms/IconButton";
import Typography from "components/atoms/Typography";
import {
  changeSelection,
  swapSelection,
} from "features/Dashboard/store/dashboard.slice";
import { SwapIcon } from "components/atoms/Icons";
import useConnect from "hooks/useConnect";
import SwapRow from "./components/SwapRow";
import Button from "components/atoms/Button";
import {
  areAllTokenPropsValid,
  getFromTokenProps,
  getToTokenProps,
} from "features/Dashboard/store/dashboard.selectors";

import {
  swapFlowContainerStyle,
  swapButtonContainerStyle,
  confirmSwapButtonStyle,
  firstRowStyle,
} from "./SwapFlow.styles";

const SwapFlow = () => {
  const { t } = useTranslation();
  const { connectedStatus } = useConnect();
  const dispatch = useDispatch();
  const fromSelection = useSelector(getFromTokenProps);
  const toSelection = useSelector(getToTokenProps);
  const allTokenPropsValid = useSelector(areAllTokenPropsValid);
  const interpolationValues = {
    token1: fromSelection.token,
    token2: toSelection.token,
    rate: 0.00127451,
  };
  const toFieldHelperText =
    toSelection.validation.value && toSelection.validation.token
      ? t("exchange rates", interpolationValues)
      : "";

  const handleSwapSelection = () => {
    dispatch(swapSelection());
  };

  const handleTokenChange = (branch: string) => (token: string) => {
    dispatch(changeSelection({ branch, prop: "token", value: token }));
  };

  const handleValueChange = (branch: string) => (value: number) => {
    dispatch(changeSelection({ branch, prop: "value", value }));
  };

  return (
    <Container sx={swapFlowContainerStyle}>
      <Typography variant="h6">{t("select start swapping")}</Typography>
      <SwapRow
        sx={firstRowStyle}
        selection={fromSelection}
        connected={connectedStatus}
        inputTitle={t("amount")}
        dropdownTitle={t("from")}
        secondaryTitle={connectedStatus ? t("token balance") : ""}
        helperText={t("max funds hint")}
        errorText={t("invalid token amount")}
        onTokenChange={handleTokenChange("from")}
        onValueChange={handleValueChange("from")}
      />
      <Grid
        sx={swapButtonContainerStyle}
        container
        display="flex"
        justifyContent="center"
      >
        <IconButton size="large" onClick={handleSwapSelection}>
          <SwapIcon />
        </IconButton>
      </Grid>
      <SwapRow
        selection={toSelection}
        connected={connectedStatus}
        inputTitle={t("amount")}
        dropdownTitle={t("to")}
        helperText={toFieldHelperText}
        errorText={t("invalid token amount")}
        onTokenChange={handleTokenChange("to")}
        onValueChange={handleValueChange("to")}
      />
      <Button
        sx={confirmSwapButtonStyle}
        disabled={!connectedStatus || !allTokenPropsValid}
        size="large"
        variant="contained"
        fullWidth
      >
        {t("swap")}
      </Button>
    </Container>
  );
};

export default SwapFlow;
