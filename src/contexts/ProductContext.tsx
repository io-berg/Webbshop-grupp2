import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { data } from "../utils/mockData";
import { Product } from "../utils/types";

interface ContextValue {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

const ProductContext = createContext<ContextValue>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
});

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>(() => {
    if (localStorage.getItem("products")) {
      return JSON.parse(localStorage.getItem("products")!);
    } else {
      return data;
    }
  });

  const addProduct = (product: Product) => {
    setProducts((prevState) => [...prevState, product]);
  };

  const removeProduct = (product: Product) => {
    setProducts((prevState) => prevState.filter((p) => p.id !== product.id));
  };

  const editProduct = (product: Product) => {
    setProducts((prevState) =>
      prevState.map((p) => (p.id === product.id ? product : p))
    );
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
