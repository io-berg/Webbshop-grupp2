import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
  handleDelete: (product: Product) => void;
  handleEdit: (product: Product) => void;
  gray: boolean;
}

const DesktopRow: FC<Props> = ({ product, handleDelete, handleEdit, gray }) => {
  return (
    <TableRow key={product.id} sx={gray ? { backgroundColor: "#f9f9f9" } : {}}>
      <TableCell>{product.id}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>
        <div className="flex w-200px nowrap text-ellipsis">
          {product.description}
        </div>
      </TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.amountInStock}</TableCell>
      <TableCell>
        <div className="flex">
          <Button color="info" size="small" onClick={() => handleEdit(product)}>
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
      </TableCell>
    </TableRow>
  );
};

export default DesktopRow;
