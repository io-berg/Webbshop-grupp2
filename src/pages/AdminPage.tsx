import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
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
    </>
  );
};

export default AdminPage;
