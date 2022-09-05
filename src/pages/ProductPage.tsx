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
import React, { FC } from "react";
import { Product } from "../utils/types";
import ProductPageCard from "../components/ProductPageCard";
import { data } from "../utils/mockData";

interface Props {
  id: number;
}

const ProductPage: FC<Props> = ({ id }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", widht: "100%", height: "100vh" }}>
          <div className="flex flex-row">{/* <ProductPageCard {} />*/}</div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProductPage;
