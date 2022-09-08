import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
}

const ProductPageCard: FC<Props> = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const cart = useCart();
  return (
    <Grid container>
      <Grid item className="flex ">
        <Card className="max-w-10">
          <CardMedia
            component="img"
            image={product.imgUrl}
            alt={"Bild på en " + product.name}
            sx={{ width: "50%" }}
          />
        </Card>
      </Grid>
      <Grid item>
        <Card>
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
      </Grid>

      <div className="flex">
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
    </Grid>
  );
};

export default ProductPageCard;
