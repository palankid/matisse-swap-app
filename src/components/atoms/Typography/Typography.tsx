import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";

interface TypographyType extends TypographyProps {
  children: React.ReactNode;
  variant: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

const Typography = ({ children, variant, ...rest }: TypographyType) => {
  const isParagraph = ["hero", "body1bold", "body2bold"].includes(variant);
  return (
    <MuiTypography {...rest} variant={variant} paragraph={isParagraph}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
