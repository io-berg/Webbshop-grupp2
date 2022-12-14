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
import NavCrumbs from "../components/NavCrumbs";
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
        <NavCrumbs
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Admin", path: "/admin" },
          ]}
        />
        <ProductTable
          Products={products}
          handleDelete={handleClickDelete}
          handleEdit={handleClickEdit}
          handleAdd={handleClickAdd}
          mobile={mobile}
        />
        {productToDelete && (
          <Dialog open={productToDelete !== null}>
            <DialogTitle>
              Är du säker på att du vill ta bort produkten &quot;
              {productToDelete?.name}&quot;?
            </DialogTitle>
            <DialogActions>
              <Button onClick={() => setProductToDelete(null)}>Avbryt</Button>
              <Button
                variant="contained"
                onClick={() => handleConfirmDelete(productToDelete)}
                color="error"
              >
                Ta bort
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
      {mobile && (
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickAdd}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <div className="h-20" />
    </>
  );
};

export default AdminPage;
