import { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { Product } from "../utils/types";

interface Props {
  product: Product;
}

const ProductPageCard: FC<Props> = ({ product }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia component="img" height="200" image={product.imgUrl} />
    </Card>
  );
};

export default ProductPageCard;
