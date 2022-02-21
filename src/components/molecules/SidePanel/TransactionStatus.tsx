import { Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Trans } from "react-i18next";

import Typography from "components/atoms/Typography";

import { tableStyle, dividerStyle } from "./TransactionStatus.styles";

interface TransactionStatusCell {
  title: string;
  value: string;
}

interface TransactionStatusType {
  data: TransactionStatusCell[];
  detailsHintKey: string;
}

const TransactionStatus = ({ detailsHintKey, data }: TransactionStatusType) => (
  <>
    <Table sx={tableStyle}>
      <TableBody>
        {data.map((row) => {
          return (
            <TableRow key={row.title}>
              <TableCell align="left">
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">{row.value}</Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    <Divider sx={dividerStyle} />
    <Typography variant="caption">
      <Trans i18nKey={detailsHintKey} />
    </Typography>
  </>
);

export default TransactionStatus;
