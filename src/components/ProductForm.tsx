import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
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
        // EDIT
      } else {
        // NEW
      }
      // TODO: Save product to state/api
      console.log("ON SUBMIT", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-1/4">
      <div className="flex justify-between">
        <label htmlFor="name">Name:</label>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
      {formik.touched.name && formik.errors.name}
      <div className="flex justify-between">
        <label htmlFor="price">Price:</label>
        <input
          placeholder="price"
          type="number"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.price}

      <div className="flex justify-between">
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          placeholder="imgUrl"
          type="text"
          name="imgUrl"
          value={formik.values.imgUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.imgUrl && formik.errors.imgUrl}

      <div className="flex justify-between">
        <label htmlFor="description">Description:</label>
        <input
          placeholder="description"
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.description && formik.errors.description}

      <div className="flex justify-between">
        <label htmlFor="longDescription">Long Description:</label>
        <input
          placeholder="longDescription"
          type="text"
          name="longDescription"
          value={formik.values.longDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.longDescription && formik.errors.longDescription}

      <div className="flex justify-between">
        <label htmlFor="amountInStock">Amount in stock:</label>
        <input
          placeholder="amountInStock"
          type="number"
          name="amountInStock"
          value={formik.values.amountInStock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.amountInStock}

      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;
