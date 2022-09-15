/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button, Input, TableCell } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
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
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Produkt</TableCell>
            <TableCell align="right">Pris</TableCell>
            <TableCell align="center" padding="none">
              Antal
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "100px",
              }}
              size="small"
            >
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
              <TableCell align="left" component="th" scope="row" padding="none">
                <div className="flex flex-col items-center justift-start sm:flex-row pl-2">
                  <img src={row.product.imgUrl} alt="" className="w-16" />
                  {row.product.name}
                </div>
              </TableCell>

              <TableCell align="right">
                {(row.product.price * row.quantity).toFixed(2)}
              </TableCell>
              <TableCell align="center" padding="none">
                <Input
                  type="number"
                  value={row.quantity || ""}
                  onChange={(e) => {
                    if (e.target.value === "" || parseInt(e.target.value) < 1) {
                      cart.updateItemQuantity(row.id, 0);
                    } else {
                      cart.updateItemQuantity(row.id, parseInt(e.target.value));
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value === "" || parseInt(e.target.value) < 1) {
                      cart.updateItemQuantity(row.id, 1);
                    }
                  }}
                  inputProps={{
                    min: 1,
                  }}
                  disabled={disableControls}
                  sx={{
                    width: "40px",
                    padding: "0px",
                  }}
                />
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingLeft: "0",
                }}
              >
                <Button
                  disabled={disableControls}
                  color="error"
                  size="small"
                  onClick={() => cart.removeCartItem(row.id)}
                  sx={{
                    width: "40px",
                    padding: 0,
                  }}
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
