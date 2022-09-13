import {
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";
import CartTable from "../components/CartTable";
import { useCart } from "../contexts/CartContext";
import CartForm from "../components/CartForm";
import { useNavigate } from "react-router-dom";



const CartPage: FC = () => {
  const cart=useCart();
  const navigate=useNavigate();

  return (
    <Container>
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/Cart" },
        ]}
      />

      <Box paddingBottom="2rem">
        <h1>Kundvagnen 🛒 (Under construction)</h1>

        <div className="flex w-full justify-center">
          <CartTable cartItems={cart.cartItems}></CartTable>
        </div>
      </Box>

      <Box>
        <h1>Fyll i dina uppgifter:</h1>

        <div className="flex w-full justify-center">
          <CartForm onSubmit={() => navigate("/orderconfirmation")}></CartForm>
        </div>

      </Box>
    </Container>
  );
};

export default CartPage;
