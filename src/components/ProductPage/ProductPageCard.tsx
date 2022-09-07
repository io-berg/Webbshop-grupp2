import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../utils/types";
import { useCart } from "../../contexts/CartContext";

interface Props {
  product: Product;
}

const ProductPageCard: FC<Props> = ({ product }) => {
  const cart = useCart();
  return (
    <div className="flex flex-col p-1">
      <div className="flex p-1">
        <Card sx={{ minWidth: 375 }}>
          <CardMedia component="img" height="100" image={product.imgUrl} />
        </Card>
        <Card sx={{ minWidth: 375}}>
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
            <Button onClick={() => cart.addCartItem(product)}>Lägg till i varukorgen </Button>
          </CardActions>
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
      </div>
    </div>
  );
};

export default ProductPageCard;
