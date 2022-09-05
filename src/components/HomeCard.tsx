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
import { Product } from "../utils/types";

interface Props {
  product: Product;
}
const HomeCard: FC<Props> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          Lägg till i kundvagn{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
