import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Product, ProductCreate } from "../utils/types";

interface Props {
  product?: Product;
  onSubmit: (productCreate: ProductCreate) => void;
}
type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  name: Yup.string().min(1).required("Namn får inte vara blankt"),
  price: Yup.number()
    .positive("Priset får inte vara 0 eller negativt")
    .required("Priset får inte vara blankt"),
  imgUrl: Yup.string().min(1).required("Bild länk får inte vara blank"),
  description: Yup.string().min(1).required("Beskrivning får inte vara blank"),
  longDescription: Yup.string()
    .min(1)
    .required("Längre beskrivning får inte vara blank"),
  amountInStock: Yup.number()
    .positive("Lagersaldo får inte vara 0 eller negativt")
    .required("Lagersaldo får inte vara blankt"),
});

const ProductForm: FC<Props> = ({ product, onSubmit }) => {
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
      onSubmit(values);
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
          <Typography variant="subtitle1" color="error">
            {formik.touched.name && formik.errors.name}
          </Typography>
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
          <Typography variant="subtitle1" color="error">
            {formik.errors.price}
          </Typography>
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
          <Typography variant="subtitle1" color="error">
            {formik.touched.imgUrl && formik.errors.imgUrl}
          </Typography>
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
          <Typography variant="subtitle1" color="error">
            {formik.errors.amountInStock}
          </Typography>
        </div>
      </div>
      <div className="flex w-full flex-col">
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
        <Typography variant="subtitle1" color="error">
          {formik.touched.description && formik.errors.description}
        </Typography>
      </div>

      <div className="flex w-full flex-col">
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
        <Typography variant="subtitle1" color="error">
          {formik.touched.longDescription && formik.errors.longDescription}
        </Typography>
      </div>

      <Button variant="contained" type="submit">
        Spara Produkt
      </Button>
    </form>
  );
};

export default ProductForm;
