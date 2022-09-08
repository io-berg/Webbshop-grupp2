import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
  handleDelete: (product: Product) => void;
  handleEdit: (product: Product) => void;
  gray: boolean;
}

const MobileRow: FC<Props> = ({ product, handleEdit, handleDelete, gray }) => {
  const [open, setOpen] = useState(false);

  const rowStyle = {
    backgroundColor: gray ? "#f9f9f9" : "white",
    "& > *": { borderBottom: "unset" },
  };

  return (
    <>
      <TableRow sx={rowStyle}>
        <TableCell component="th" scope="row" size="small" width={"20px"}>
          {product.id}
        </TableCell>
        <TableCell align="left">
          <div className="flex w-200px nowrap text-ellipsis">
            {product.name}
          </div>
        </TableCell>
        <TableCell width={"20px"}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: gray ? "#f9f9f9" : "white" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body2" component="div">
                <span className="font-bold">Beskrivning: </span>
                {product.description}
              </Typography>

              <Typography variant="body2" component="div">
                <span className="font-bold">Pris: </span> {product.price}
              </Typography>

              <Typography variant="body2" component="div">
                <span className="font-bold">Lager saldo: </span>{" "}
                {product.amountInStock}
              </Typography>

              <div className="flex w-full justify-end">
                <Button
                  color="info"
                  size="small"
                  onClick={() => handleEdit(product)}
                >
                  <EditOutlinedIcon />
                </Button>
                <Button
                  color="error"
                  size="small"
                  onClick={() => handleDelete(product)}
                >
                  <DeleteForeverOutlinedIcon />
                </Button>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default MobileRow;
