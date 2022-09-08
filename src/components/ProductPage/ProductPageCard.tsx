import { FC } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Product } from "../../utils/types";
import { useCart } from "../../contexts/CartContext";
import React from "react";

interface Props {
  product: Product;
}

const ProductPageCard: FC<Props> = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const cart = useCart();
  return (
    <div className="flex flex-col p-1">
      <div className="flex ">
        <Card sx={{ minWidth: 375 }}>
          <CardMedia component="img" height="100" image={product.imgUrl} />
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
          </CardContent>
          <CardActions>
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
          </CardActions>
        </Card>
      </div>

      <div className="flex  ">
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
      </div>
    </div>
  );
};

export default ProductPageCard;
