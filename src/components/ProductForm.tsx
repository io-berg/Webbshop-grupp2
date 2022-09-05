import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useProducts } from "../contexts/ProductContext";
import { Product, ProductCreate } from "../utils/types";

interface Props {
  product?: Product;
}
type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  name: Yup.string().min(1).required(),
  price: Yup.number().required().min(0),
  imgUrl: Yup.string().min(1).required(),
  description: Yup.string().min(1).required(),
  longDescription: Yup.string().min(1).required(),
  amountInStock: Yup.number().min(0).required(),
});

const ProductForm: FC<Props> = ({ product }) => {
  const { addProduct, editProduct } = useProducts();
  const navigate = useNavigate();

  const formik = useFormik<ProductCreate>({
    initialValues: product || {
      name: "",
      price: 0,
      imgUrl: "",
      description: "",
      longDescription: "",
      amountInStock: 0,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      if (product) {
        const editedProduct: Product = {
          ...values,
          id: product.id,
          reviews: product.reviews,
        };
        //add confirmation that all worked
        editProduct(editedProduct);
        navigate("/admin");
      } else {
        const newProduct: Product = {
          ...values,
          id: generateProductId(),
          reviews: [],
        };
        addProduct(newProduct);
        //add confirmation that all worked
        navigate("/admin");
      }
      console.log("ON SUBMIT", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-1/4">
      <TextField
        label="Namn"
        placeholder="name"
        type="text"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name}
      <TextField
        label="Pris"
        placeholder="price"
        type="number"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.price}

      <TextField
        label="Bild url"
        placeholder="imgUrl"
        type="text"
        name="imgUrl"
        value={formik.values.imgUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.imgUrl && formik.errors.imgUrl}

      <TextField
        multiline
        label="Beskriving"
        placeholder="description"
        type="text"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description}

      <TextField
        multiline
        label="Längre Beskrivning"
        placeholder="longDescription"
        type="text"
        name="longDescription"
        value={formik.values.longDescription}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.longDescription && formik.errors.longDescription}

      <TextField
        label="Lagersaldo"
        placeholder="amountInStock"
        type="number"
        name="amountInStock"
        value={formik.values.amountInStock}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.errors.amountInStock}
      <Button variant="contained" type="submit">
        Spara Produkt
      </Button>
    </form>
  );
};

function generateProductId() {
  const { products } = useProducts();

  const id: number = Math.max(...products.map((p) => p.id));
  return id;
}

export default ProductForm;
