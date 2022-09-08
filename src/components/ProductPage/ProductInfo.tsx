import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, ButtonGroup, Rating, Typography } from "@mui/material";
import React, { FC } from "react";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
}

const ProductInfo: FC<Props> = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const cart = useCart();

  return (
    <Box className="flex flex-col h-full justify-end min-w-[30rem]">
      <Box>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary" paddingBottom={3}>
          {product.description}
        </Typography>
      </Box>

      <Box className="flex align-center pb-3">
        <Typography alignItems="center">Rating:</Typography>
        <Rating
          name="read-only"
          value={product.reviews.reduce((acc, review) => acc + review.stars, 0)}
          readOnly
        />
      </Box>

      <Typography variant="h5" color="red">
        {product.price * count} kr
      </Typography>

      <Box className="flex center mt-3 mb-3">
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>{count}</Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <Button onClick={() => cart.addCartItem(product, count)}>
          Lägg till i varukorgen{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfo;
