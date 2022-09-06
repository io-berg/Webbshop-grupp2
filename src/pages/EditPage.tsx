import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/ProductContext";
import { Product, ProductCreate } from "../utils/types";

const EditPage: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ Id: string }>();
  const { products, editProduct } = useProducts();
  const product = products.find((p) => p.id === Number(params.Id));

  if (product) {
    const handleSubmit = (values: ProductCreate) => {
      const editedProduct: Product = {
        ...values,
        id: product.id,
        reviews: product.reviews,
      };
      //add confirmation that all worked
      editProduct(editedProduct);
      navigate("/admin");
    };
    return (
      <Container>
        <NavCrumbs
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Admin", path: "/admin" },
            { name: "Edit", path: "/admin/edit/${params.Id}" },
          ]}
        />
        <Typography variant="h2" align="center">
          Ändra Produkt
        </Typography>
        <ProductForm product={product} onSubmit={handleSubmit} />
      </Container>
    );
  }
  return (
    <Typography variant="h3" align="center" color="error">
      Ingen produkt med det id {params.Id} finns.
    </Typography>
  );
};

export default EditPage;
