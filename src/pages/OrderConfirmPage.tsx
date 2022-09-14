import { Box, Button, Container } from "@mui/material";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";
import { useCart } from "../contexts/CartContext";

const OrderConfirmPage: FC = () => {
  const { confirmedOrderItems } = useCart();

  return (
    <Container>
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "OrderConfirmation", path: "/orderconfirmation" },
        ]}
      />

      <Box>
        <h1>Tack för din beställning! 🌻</h1>

        <p>
          Du har beställt följande produkter:
          {confirmedOrderItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} x {item.quantity}
            </li>
          ))}
        </p>

        <Button href="/" variant="contained">
          Tillbaka till startsidan
        </Button>
      </Box>
    </Container>
  );
};

export default OrderConfirmPage;
