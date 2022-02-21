import { Link } from "@mui/material";
import { Trans } from "react-i18next";

import Typography from "components/atoms/Typography";

import { textStyle, linkStyle } from "./PanelInfo.styles";

interface PanelInfoType {
  textOrKey: string;
  showLink: boolean;
  onLinkClick: () => void;
}

const PanelInfo = ({ textOrKey, showLink, onLinkClick }: PanelInfoType) => {
  return (
    <>
      <Typography sx={textStyle} variant="body2">
        <Trans i18nKey={textOrKey} />
      </Typography>
      {showLink && (
        <Link
          sx={linkStyle}
          href="#"
          variant="buttonsmall"
          onClick={onLinkClick}
        >
          Connect wallet
        </Link>
      )}
    </>
  );
};

export default PanelInfo;
