import { Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartForm from "../components/CartForm";
import CartTable from "../components/CartTable";
import NavCrumbs from "../components/NavCrumbs";
import { useCart } from "../contexts/CartContext";

const CartPage: FC = () => {
  const [confirmedCart, setConfirmedCart] = useState(false);
  const cart = useCart();
  const navigate = useNavigate();

  const handleCancel = () => {
    setConfirmedCart(false);
  };

  return (
    <Container>
      <div className="mt-2" />
      <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/Cart" },
        ]}
      />
      <Paper
        sx={{
          padding: 2,
        }}
      >
        <Box>
          <Typography variant="h5">Kundvagn</Typography>
          <CartTable
            cartItems={cart.cartItems}
            disableControls={confirmedCart}
          />
          <div className="w-full flex justify-end mt-3 items-center gap-4">
            <Typography
              alignItems="center"
              fontSize={18}
              lineHeight="0"
              paddingBottom={0}
            >
              Totalpris:{" "}
              {cart.cartItems
                .reduce(
                  (acc, item) => acc + item.quantity * item.product.price,
                  0
                )
                .toFixed(2)}
              kr
            </Typography>
            {!confirmedCart && (
              <Button
                variant="contained"
                onClick={() => setConfirmedCart(true)}
                disabled={cart.cartItems.length === 0}
              >
                Bekräfta kundvagn
              </Button>
            )}
          </div>
        </Box>

        {confirmedCart && (
          <Box className="flex justify-center flex-col text-center">
            <Typography variant="h5">Dina Uppgifter</Typography>

            <div className="flex w-full justify-center">
              <CartForm
                handleSubmit={() => navigate("/orderconfirmation")}
                handleCancel={handleCancel}
              />
            </div>
          </Box>
        )}
      </Paper>
      <div className="p-4" />
    </Container>
  );
};

export default CartPage;
