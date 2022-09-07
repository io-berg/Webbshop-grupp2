import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductTable from "../components/ProductTable/ProductTable";
import { useProducts } from "../contexts/ProductContext";
import { useSnack } from "../contexts/SnackContext";
import { Product } from "../utils/types";

const AdminPage: FC = () => {
  const { products, removeProduct } = useProducts();
  const { snack, handleClose } = useSnack();
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
        <Snackbar
          message={snack.message}
          open={snack.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={snack.color}
            sx={{ width: "100%" }}
          >
            {snack.message}
          </Alert>
        </Snackbar>
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
