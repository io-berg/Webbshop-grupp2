import { Box, Container, CssBaseline, List, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { Product } from "../utils/types";
import ProductPageCard from "../components/ProductPage/ProductPageCard";
import ReviewCard from "../components/ProductPage/ReviewCard";
import { data } from "../utils/mockData";
import NavCrumbs from "../components/NavCrumbs";

//detta objekt endast för o testa
const product = {
  id: 1,
  name: "Krysantemum",
  price: 39.99,
  imgUrl:
    "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg2x/560de1a9/globalassets/catalog-images/7/137375/77041b83a8860d289f0252a94ede0036.jpg",
  description: "En rikblommande färgklick i gult som tål några minusgrader.",
  longDescription:
    "Klassisk höstväxt som tål en frostknäpp. Vid plantering redan på sensommaren så kan den ofta blomma över. Kommer då inte tillbaka med ny blomning men pröva gärna att plantera ut den i skyddat läge. Kan under gynnsamma vintrar komma tillbaka nästa år, Plantera den gärna i större kruka med näringsrik och fuktighetshållande jord. Bollkrysantemum har en stor bladmassa och är därför törstig så var noga med vattningen, speciellt i solig placering. I något skuggigare läge blommar den längre. Kallas för bollkryss i folkmun.",
  amountInStock: 100,
  reviews: [
    {
      id: 1,
      author: "Kalle",
      stars: 5,
      title: "Bra blomma",
      body: "Blommar bra, bra färg och bra storlek.",
    },
       {
      id: 2,
      author: "Kalle",
      stars: 5,
      title: "Bra blomma",
      body: "Blommar bra, bra färg och bra storlek.",
    },
       {
      id: 3,
      author: "Kalle",
      stars: 5,
      title: "Bra blomma",
      body: "Blommar bra, bra färg och bra storlek.",
    },
  ],
};

const ProductPage: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
       
        <Box sx={{ bgcolor: "FFFFFF", widht: "100%", height: "100%" }}>
              <NavCrumbs
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Product", path: "/product" },
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
};

export default ProductPage;
