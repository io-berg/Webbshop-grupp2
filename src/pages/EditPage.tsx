import { FC } from "react";
import { useParams } from "react-router-dom";
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
    <div className="w-screen flex items-center flex-col">
      <h2 className="text-5xl font-extrabold m-4"> Ändra Produkt</h2>
      <ProductForm product={product} />
    </div>
  );
};

export default EditPage;
