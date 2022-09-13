import {
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CartTable from "../components/CartTable";
import { useCart } from "../contexts/CartContext";



const CartPage: FC = () => {
  const cart=useCart();

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

        <div>
          <CartTable cartItems={cart.cartItems}></CartTable>
        </div>
      </Box>

      <Box>
        <h1>Fyll i dina uppgifter:</h1>

        <div>

        </div>

        

        <Stack spacing={3} direction="row" paddingBottom="2rem">
          <Button variant="contained">Fortsätt till betalning</Button>
          <Button href="/" variant="contained">
            Avbryt beställning
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default CartPage;
