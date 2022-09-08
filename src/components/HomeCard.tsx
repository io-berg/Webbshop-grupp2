import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Product } from "../utils/types";

interface Props {
  product: Product;
}
const HomeCard: FC<Props> = ({ product }) => {
  const cart = useCart();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/product/${product.id}`)}>
        <CardMedia
          component="img"
          height="140"
          image={product.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
            <br />
            <Typography>Pris: {product.price} kr</Typography>
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary" minHeight="80px">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => cart.addCartItem(product, 1)}
          size="small"
          color="primary"
        >
          Lägg till i kundvagn{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
