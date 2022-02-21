import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { SwapIcon } from "components/atoms/Icons";
import { useTranslation } from "react-i18next";
import SwapRow from "./components/SwapRow";

import {
  swapFlowContainerStyle,
  swapButtonContainerStyle,
  confirmSwapButtonStyle,
  firstRowStyle,
} from "./SwapFlow.styles";

const SwapFlow = () => {
  const { t } = useTranslation();

  return (
    <Container sx={swapFlowContainerStyle}>
      <Typography variant="h6">{t("select start swapping")}</Typography>
      <SwapRow sx={firstRowStyle} />
      <Grid
        sx={swapButtonContainerStyle}
        container
        display="flex"
        justifyContent="center"
      >
        <IconButton size="large">
          <SwapIcon />
        </IconButton>
      </Grid>
      <SwapRow />
      <Button sx={confirmSwapButtonStyle} fullWidth>
        {t("swap")}
      </Button>
    </Container>
  );
};

export default SwapFlow;
