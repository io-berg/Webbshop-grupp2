import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
  useMediaQuery,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable/ProductTable";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../utils/types";

const AdminPage: FC = () => {
  const { products, removeProduct } = useProducts();
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width: 850px)");

  const handleClickDelete = (product: Product) => {
    setProductToDelete(product);
  };

  const handleConfirmDelete = (product: Product) => {
    removeProduct(product);
    setProductToDelete(null);
  };

  const handleClickEdit = (product: Product) => {
    navigate(`/admin/edit/${product.id}`);
  };

  const handleClickAdd = () => {
    navigate(`/admin/create`);
  };

  return (
    <>
      <Container>
        <div className="mt-6" />
        <ProductTable
          Products={products}
          handleDelete={handleClickDelete}
          handleEdit={handleClickEdit}
          handleAdd={handleClickAdd}
          mobile={mobile}
        />
        <Dialog open={productToDelete !== null}>
          <DialogTitle>
            Är du säker på att du vill ta bort produkten "
            {productToDelete?.name}"?
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setProductToDelete(null)}>Avbryt</Button>
            <Button
              variant="contained"
              onClick={() => handleConfirmDelete(productToDelete!)}
              color="error"
            >
              Ta bort
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      {mobile && (
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickAdd}
          sx={{
            position: "absolute",
            bottom: 34,
            right: 10,
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </>
  );
};

export default AdminPage;
