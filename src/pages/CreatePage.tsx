import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/ProductContext";
import { useSnack } from "../contexts/SnackContext";
import { ProductCreate } from "../utils/types";

const CreatePage: FC = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const { addNewSnack } = useSnack();

  const handleSubmit = (values: ProductCreate) => {
    //add confirmation that all worked
    addProduct(values);
    addNewSnack({
      message: "Produkt är nu skapad",
      color: "success",
      open: true,
    });
    navigate("/admin");
  };
  return (
    <Container>
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Admin", path: "/admin" },
          { name: "Create", path: "/admin/create" },
        ]}
      />
      <Typography variant="h2" align="center" marginBottom={2}>
        Skapa produkt
      </Typography>
      <ProductForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default CreatePage;
