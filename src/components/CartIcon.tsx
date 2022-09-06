import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, keyframes } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const CartIcon = () => {
  const [animate, setAnimate] = useState(false);
  const cart = useCart();
  const navigate = useNavigate();

  const frames = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

  const style = {
    animation: `${frames} 0.3s ease-in-out`,
    "&:not(:first-child)": {
      animation: `${frames} 0.3s ease-in-out`,
    },
  };

  const runAnimation = async () => {
    setAnimate(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setAnimate(false);
  };

  useEffect(() => {
    runAnimation();
  }, [cart.cartItems]);

  return (
    <IconButton onClick={() => navigate("/cart")}>
      <ShoppingCartIcon sx={{ color: "white" }} />
      <Badge
        badgeContent={cart.cartItems.length}
        color="secondary"
        sx={animate ? style : null}
        variant="standard"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="h-6"></div>
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
