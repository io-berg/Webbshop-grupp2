import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  quantity: number,
  product: string,
  price: number,

) {
  return { quantity, product, price};
}

const rows = [
  createData( 2, 'Magnolia', 75,)

];


export default function CartTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Antal</TableCell>
            <TableCell align="right">Produkt</TableCell>
            <TableCell align="right">Pris</TableCell>
            <TableCell align="right">Redigera antal</TableCell>
            <TableCell align="right">Ta bort</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.quantity}
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
