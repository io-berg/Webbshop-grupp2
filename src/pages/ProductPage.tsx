import { Box, Container, CssBaseline, List, Typography } from "@mui/material";
import React, { FC } from "react";
import ProductPageCard from "../components/ProductPage/ProductPageCard";
import ReviewCard from "../components/ProductPage/ReviewCard";
import { data } from "../utils/mockData";
import NavCrumbs from "../components/NavCrumbs";
import { useParams } from "react-router-dom";

const ProductPage: FC = () => {
  const params = useParams<{ Id: string }>();
  const product = data.find((p) => p.id === Number(params.Id));
  if (product) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "FFFFFF", widht: "100%", height: "100%" }}>
            <NavCrumbs
              crumbs={[
                { name: "Home", path: "/" },
                { name: "Product", path: "/product/${params.Id}" },
              ]}
            />
            <ProductPageCard product={product} />
          </Box>
          <Box sx={{ bgcolor: "#FFFFFF", widht: "100%", height: "100vh" }}>
            <List>
              {product.reviews.map((review) => (
                <ReviewCard review={review} />
              ))}
            </List>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
  return (
    <Typography variant="h3" align="center" color="error">
      Ingen produkt med det id {params.Id} finns.
    </Typography>
  );
};

export default ProductPage;
