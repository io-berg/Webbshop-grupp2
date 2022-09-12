import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductInfo from "../components/ProductPage/ProductInfo";
import ReviewsContainer from "../components/ProductPage/ReviewsContainer";
import { useProducts } from "../contexts/ProductContext";

const ProductPage: FC = () => {
  const { products } = useProducts();
  const params = useParams<{ Id: string }>();
  const product = products.find((p) => p.id === Number(params.Id));

  if (product) {
    return (
      <Container className="pt-5">
        <NavCrumbs
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Product", path: "/product/${params.Id}" },
          ]}
        />
        <Card className="p-6">
          <Box className="flex flex-col w-full lg:flex-row">
            <div className="w-full lg:w-1/2">
              <CardMedia
                component="img"
                src={product.imgUrl}
                alt={"Bild på en " + product.name}
                sx={{ width: "100%", objectFit: "fill" }}
              />
            </div>
            <ProductInfo product={product} />
          </Box>
          <Divider variant="middle" sx={{ marginBottom: 3, marginTop: 3 }} />
          <Box className="flex flex-col lg:flex-row">
            <Box className="w-full pr-3 pb-5 lg:w-1/2">
              <Typography variant="h5">Detaljer</Typography>
              <Typography variant="body1">{product.longDescription}</Typography>
            </Box>
            <ReviewsContainer reviews={product.reviews} />
          </Box>
          <div className="h-10" />
        </Card>
        <div className="h-20" />
      </Container>
    );
  }
  return (
    <Typography variant="h3" align="center" color="error">
      Ingen produkt med det id {params.Id} finns.
    </Typography>
  );
};

export default ProductPage;
