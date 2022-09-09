import AddIcon from "@mui/icons-material/Add";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RemoveIcon from "@mui/icons-material/Remove";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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

  const calcPrice = () => {
    return (product.price * count).toFixed(2);
  };

  return (
    <Box className="flex flex-col justify-end">
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

      <Typography variant="overline" marginBottom={2}>
        <LocalFloristIcon /> Fri frakt till butik
      </Typography>
      <Typography variant="overline" marginBottom={2}>
        <WorkspacePremiumIcon /> 1 års växtgaranti på trädgårdsväxter
      </Typography>
      <Typography variant="overline" marginBottom={2}>
        <QuestionAnswerIcon /> Experthjälp i butik &amp; online
      </Typography>
      <Typography variant="h5" color="red">
        {calcPrice()} kr
      </Typography>
      <Box className="flex center mt-3 mb-3">
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 1));
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
        <Button
          variant="contained"
          onClick={() => cart.addCartItem(product, count)}
          size="small"
          sx={{ marginLeft: 2 }}
          color="success"
        >
          Lägg i kundvagn{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfo;
