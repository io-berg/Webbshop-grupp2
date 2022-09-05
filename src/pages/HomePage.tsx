import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import { Product } from "../utils/types";

const HomePage = () => {
  const product: Product = {
    id: 1,
    name: "Product 1",
    price: 100,
    imgUrl: "https://picsum.photos/200",
    description: "Product 1 description",
    longDescription: "Product 1 long description",
    reviews: [],
    amountInStock: 10,
  };

  const cart = useCart();

  return (
    <div>
      <Button onClick={() => cart.addCartItem(product)}>Add to cart</Button>
      {cart.cartItems.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.name}</p>
          <p>{item.quantity}</p>
          <Button onClick={() => cart.removeCartItem(item.id)}>Remove</Button>
          <Button
            onClick={() => cart.updateItemQuantity(item.id, item.quantity + 1)}
          >
            ^
          </Button>
          <Button
            onClick={() => cart.updateItemQuantity(item.id, item.quantity - 1)}
          >
            v
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
