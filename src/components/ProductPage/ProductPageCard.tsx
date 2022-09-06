import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
}

const ProductPageCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col p-1">
      <div className="flex p-1">
        <Card sx={{ minWidth: 375 }}>
          <CardMedia component="img" height="140" image={product.imgUrl} />
        </Card>
        <Card sx={{ minWidth: 375, marginTop: 70}}>
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
      </div>
    </div>
  );
};

export default ProductPageCard;
