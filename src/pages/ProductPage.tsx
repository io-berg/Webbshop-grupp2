import { Card, Container, Grid, List, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import NavCrumbs from "../components/NavCrumbs";
import ProductInfo from "../components/ProductPage/ProductInfo";
import ReviewCard from "../components/ProductPage/ReviewCard";
import { useProducts } from "../contexts/ProductContext";

const ProductPage: FC = () => {
  const { products } = useProducts();
  const params = useParams<{ Id: string }>();
  const product = products.find((p) => p.id === Number(params.Id));

  if (product) {
    return (
      <Container>
        <NavCrumbs
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Product", path: "/product/${params.Id}" },
          ]}
        />
        <Card>
          <Grid container>
            <Grid item xs={5} md={5}>
              <img src={product.imgUrl} alt={"Bild på en " + product.name} />
            </Grid>
            <Grid item xs={7} md={7}>
              <ProductInfo product={product} />
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography variant="h6">Reviews</Typography>
              <List>
                {product.reviews.map((review) => (
                  <div key={review.id}>
                    <ReviewCard review={review} />
                  </div>
                ))}
              </List>
            </Grid>
          </Grid>
        </Card>
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
