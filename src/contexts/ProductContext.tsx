import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { data } from "../utils/mockData";
import { Product, ProductCreate } from "../utils/types";
import { useSnack } from "./SnackContext";

interface ContextValue {
  products: Product[];
  addProduct: (product: ProductCreate) => void;
  removeProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

const ProductContext = createContext<ContextValue>({
  products: [],
  addProduct: () => {
    console.warn("ProductProvider not found");
  },
  removeProduct: () => {
    console.warn("ProductProvider not found");
  },
  editProduct: () => {
    console.warn("ProductProvider not found");
  },
});

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>(() => {
    const localProducts = localStorage.getItem("products");
    if (localProducts) {
      return JSON.parse(localProducts);
    } else {
      return data;
    }
  });

  const { addNewSnack } = useSnack();

  const addProduct = (product: ProductCreate) => {
    const newProduct: Product = {
      ...product,
      id: generateProductId(),
      reviews: [],
    };

    addNewSnack(`${product.name} har lagts till.`, "success", 4000);
    setProducts((prevState) => [...prevState, newProduct]);
  };

  const removeProduct = (product: Product) => {
    setProducts((prevState) => prevState.filter((p) => p.id !== product.id));

    addNewSnack(`${product.name} har tagits bort`, "success", 4000);
  };

  const editProduct = (product: Product) => {
    setProducts((prevState) =>
      prevState.map((p) => (p.id === product.id ? product : p))
    );

    addNewSnack(`${product.name} har updaterats`, "success", 4000);
  };

  const generateProductId = () => {
    const id: number = Math.max(...products.map((p) => p.id), 0) + 1;
    return id;
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        editProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
