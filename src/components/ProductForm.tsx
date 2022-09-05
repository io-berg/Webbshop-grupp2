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
  name: Yup.string().min(1).required("Namn fårår inte vara blankt"),
  price: Yup.number().required("Priset får inte vara negativt").min(0),
  imgUrl: Yup.string().min(1).required("Bild länk får inte vara blank"),
  description: Yup.string().min(1).required("Beskrivning får inte vara blank"),
  longDescription: Yup.string()
    .min(1)
    .required("Längre beskrivning får inte vara blank"),
  amountInStock: Yup.number()
    .min(0)
    .required("Lagersaldo får inte vara negativt"),
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
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col w-full gap-4 sm:flex-row">
        <div className="flex w-full flex-col">
          <TextField
            sx={{ width: "100%" }}
            label="Namn"
            placeholder="name"
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <span className="text-red-500">
            {formik.touched.name && formik.errors.name}
          </span>
        </div>
        <div className="flex w-full flex-col">
          <TextField
            sx={{ width: "100%" }}
            label="Pris i kronor"
            placeholder="price"
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-500">{formik.errors.price}</span>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 sm:flex-row">
        <div className="flex w-full flex-col">
          <TextField
            sx={{ width: "100%" }}
            label="Bild url"
            placeholder="imgUrl"
            type="text"
            name="imgUrl"
            value={formik.values.imgUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-500">
            {formik.touched.imgUrl && formik.errors.imgUrl}
          </span>
        </div>
        <div className="flex w-full flex-col">
          <TextField
            sx={{ width: "100%" }}
            label="Lagersaldo"
            placeholder="amountInStock"
            type="number"
            name="amountInStock"
            value={formik.values.amountInStock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-500">{formik.errors.amountInStock}</span>
        </div>
      </div>

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
      <span className="text-red-500">
        {formik.touched.description && formik.errors.description}
      </span>

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
      <span className="text-red-500">
        {formik.touched.longDescription && formik.errors.longDescription}
      </span>

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
