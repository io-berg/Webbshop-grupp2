import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, ButtonGroup } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "../utils/types";

interface props {
  cartItems: CartItem[];
  disableControls: boolean;
}

const CartTable: FC<props> = ({ cartItems, disableControls }) => {
  const cart = useCart();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produkt</TableCell>
            <TableCell align="right">Pris</TableCell>
            <TableCell align="center">Antal</TableCell>
            <TableCell align="right" padding="normal">
              <span className="pr-2">Ta bort</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => (
            <TableRow
              key={row.product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product.name}
              </TableCell>
              <TableCell align="right">
                {(row.product.price * row.quantity).toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    disabled={disableControls}
                    onClick={() => {
                      cart.updateItemQuantity(
                        row.id,
                        Math.max(row.quantity - 1, 1)
                      );
                    }}
                    sx={{
                      width: "40px",
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button>{row.quantity}</Button>
                  <Button
                    aria-label="increase"
                    disabled={disableControls}
                    onClick={() => {
                      cart.updateItemQuantity(row.id, row.quantity + 1);
                    }}
                    sx={{
                      width: "40px",
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </TableCell>

              <TableCell align="right">
                <Button
                  disabled={disableControls}
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
};

export default CartTable;
