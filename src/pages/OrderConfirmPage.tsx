import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import { useCart } from "../contexts/CartContext";

const OrderConfirmPage: FC = () => {
  const { confirmedOrderItems } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "OrderConfirmation", path: "/orderconfirmation" },
        ]}
      />

      <Box className="flex flex-col justify-center items-center w-full">
        <Typography variant="h5">Tack för din beställning! 🌻</Typography>

        <List className="w-full max-w-[20rem]">
          {confirmedOrderItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.product.name}
                secondary={`Antal: ${item.quantity}st`}
              />
              <ListItemSecondaryAction>
                <Typography variant="h6">
                  {(item.product.price * item.quantity).toFixed(2)}kr
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">
          Totalt:{" "}
          {confirmedOrderItems
            .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
            .toFixed(2)}
          kr
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{ mt: 2 }}
          size="large"
        >
          Tillbaka till startsidan
        </Button>
      </Box>
    </Container>
  );
};

export default OrderConfirmPage;
