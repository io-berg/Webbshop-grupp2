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
  Rating,
} from "@mui/material";
import { Product } from "../utils/types";
import { object } from "yup";
import React from "react";
import { positions } from "@mui/system";

interface Props {
  product: Product;
}

const value = 2;
const ProductPageCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col p-1">
      <div className="flex p-1">
        <Card sx={{ minWidth: 375 }}>
          <CardMedia component="img" height="140" image={product.imgUrl} />
        </Card>
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {product.price}
            </Typography>
            <Button>Lägg till i varukorgen</Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex p-1 ">
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.longDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Reviews
            </Typography>

            <Typography variant="h6" color="text.secondary">
              {product.reviews[0].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography component="legend">
                {product.reviews[0].body}
                {product.reviews[0].author}
              </Typography>

              <Rating
                name="read-only"
                value={product.reviews[0].stars}
                readOnly
              />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductPageCard;
