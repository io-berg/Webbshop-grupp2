import { Button, Container, Typography } from "@mui/material";
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

  const handleSubmit = () => {
    cart.confirmOrder();
    navigate("/orderconfirmation");
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <Box className="w-full max-w-[800px]">
          <div className="self-start">
            <NavCrumbs
              crumbs={[
                { name: "Home", path: "/" },
                { name: "Cart", path: "/Cart" },
              ]}
            />
          </div>
          <Typography variant="h5" paddingTop={1}>
            Kundvagn
          </Typography>
          <CartTable
            cartItems={cart.cartItems}
            disableControls={confirmedCart}
          />
          <div className="w-full flex flex-col justify-end items-center gap-4 p-3 sm:flex-row pt-8" >
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
          <Box className="flex justify-center flex-col text-center p-4 w-full max-w-[800px]">
            <Typography variant="h5">Dina Uppgifter</Typography>

            <div className="flex w-full justify-center">
              <CartForm
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
              />
            </div>
          </Box>
        )}
        <div className="p-4" />
      </div>
    </Container>
  );
};

export default CartPage;
