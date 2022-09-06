import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, Product } from "../utils/types";

interface ContextValue {
  cartItems: CartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<ContextValue>({
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  updateItemQuantity: () => {},
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (localStorage.getItem("cartItems")) {
      return JSON.parse(localStorage.getItem("cartItems")!);
    } else {
      return [];
    }
  });

  const generateCartItemId = (): number => {
    const id = Math.max(...cartItems.map((item) => item.id), 0) + 1;
    return id;
  };

  const addCartItem = (product: Product) => {
    const newCartItems = [...cartItems];
    const item = newCartItems.find((item) => item.product.id === product.id);
    if (item) item.quantity++;
    else {
      newCartItems.push({
        id: generateCartItemId(),
        product,
        quantity: 1,
      });
    }

    setCartItems(newCartItems);
  };

  const removeCartItem = (id: Number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    const newCartItems = [...cartItems];
    const item = newCartItems.find((item) => item.id === id);
    if (item) item.quantity = quantity;
    setCartItems(newCartItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, removeCartItem, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
