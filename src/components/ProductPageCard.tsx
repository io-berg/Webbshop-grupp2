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
    <div className="flex flex-col">
      <div className="flex">
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
          </CardContent>
        </Card>
      </div>

      <div className="flex ">
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.longDescription}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Reviews
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reviews
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductPageCard;
