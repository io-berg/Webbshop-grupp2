import { Container } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/ProductContext";

const EditPage: FC = () => {
  const params = useParams<{ Id: string }>();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(params.Id));

  if (!product) {
    return <p>Produkt med Id: {params.Id} finns inte.</p>;
  }
  return (
    <Container>
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Admin", path: "/admin" },
          { name: "Edit", path: "/admin/edit/${params.Id}" },
        ]}
      />
      <h2 className="text-5xl font-extrabold m-4"> Ändra Produkt</h2>
      <ProductForm product={product} />
    </Container>
  );
};

export default EditPage;
