import React from 'react';
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import Table from '@bit/mui-org.material-ui.table';
import TableBody from '@bit/mui-org.material-ui.table-body';
import TableCell from '@bit/mui-org.material-ui.table-cell';
import TableHead from '@bit/mui-org.material-ui.table-head';
import TableRow from '@bit/mui-org.material-ui.table-row';
import Paper from '@bit/mui-org.material-ui.paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    size: 'small'
  },
}));

function createData(Symbol, Today, Change, Value, Last, Quantity) {
  return {Symbol, Today, Change, Value, Last, Quantity};
}

const rows = [
  createData('TSLA', 2900, 2.34, 260000, 1300, 200),
  createData('AAPL', -300, -1.34, 40000, 400, 100),
];

export default function AcccessibleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Stock Prices</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Today</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align = "right">Last</TableCell>
            <TableCell align = "right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Symbol}
              </TableCell>
              <TableCell align="right">{row.Today}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
              <TableCell align="right">{row.Last}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}