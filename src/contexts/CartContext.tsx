import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, Product } from "../utils/types";
import { useSnack } from "./SnackContext";

interface ContextValue {
  cartItems: CartItem[];
  addCartItem: (product: Product, amount: number) => void;
  removeCartItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  confirmOrder: () => void;
  confirmedOrderItems: CartItem[];
}

const CartContext = createContext<ContextValue>({
  cartItems: [],
  addCartItem: () => {
    console.warn("CartProvider not found");
  },
  removeCartItem: () => {
    console.warn("CartProvider not found");
  },
  updateItemQuantity: () => {
    console.warn("CartProvider not found");
  },
  confirmOrder: () => {
    console.warn("CartProvider not found");
  },
  confirmedOrderItems: [],
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const localCartItems = localStorage.getItem("cartItems");
    if (localCartItems) {
      return JSON.parse(localCartItems);
    } else {
      return [];
    }
  });
  const [confirmedOrderItems, setConfirmedOrderItems] = useState<CartItem[]>(
    []
  );

  const { addNewSnack } = useSnack();

  const generateCartItemId = (): number => {
    const id = Math.max(...cartItems.map((item) => item.id), 0) + 1;
    return id;
  };

  const addCartItem = (product: Product, amount: number) => {
    const newCartItems = [...cartItems];
    const item = newCartItems.find((item) => item.product.id === product.id);
    if (item) item.quantity += amount;
    else {
      newCartItems.push({
        id: generateCartItemId(),
        product,
        quantity: amount,
      });
    }

    addNewSnack(
      `${amount} ${product.name} har lagts till i kundvagnen`,
      "success"
    );

    setCartItems(newCartItems);
  };

  const removeCartItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    const newCartItems = [...cartItems];
    const item = newCartItems.find((item) => item.id === id);
    if (item) item.quantity = quantity;
    setCartItems(newCartItems);
  };

  const confirmOrder = () => {
    setConfirmedOrderItems(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        updateItemQuantity,
        confirmedOrderItems,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
