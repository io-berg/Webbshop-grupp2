import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CartItem } from "../utils/types";
import { Button, ButtonGroup } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { FC } from "react";

interface props {
  cartItems:CartItem[];
}

const CartTable:FC<props> = ({cartItems}) => {  
  const cart=useCart();

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
          {cartItems.map((row) => (
            <TableRow
              key={row.product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.quantity}
              </TableCell>
              <TableCell align="right">{row.product.name}</TableCell>
              <TableCell align="right">{(row.product.price * row.quantity).toFixed(2)}</TableCell>
              <TableCell align="right">
                <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              cart.updateItemQuantity(row.id, Math.max(row.quantity -1, 1));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>{row.quantity}</Button>
          <Button
            aria-label="increase"
            onClick={() => {
              cart.updateItemQuantity(row.id, row.quantity +1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

              </TableCell>

              <TableCell align="right">
                <Button
            color="error"
            size="small"
            onClick={() => cart.removeCartItem(row.id)}
          >
            <DeleteForeverOutlinedIcon />
          </Button>


              </TableCell>

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;


