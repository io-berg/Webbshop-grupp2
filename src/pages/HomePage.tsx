import { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import HomeCard from "../components/HomeCard";
import { grey } from "@mui/material/colors";
import { data } from "../utils/mockData";

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={3} marginTop={1} marginBottom={4}>
        {data.map((datan) => (
          <Grid item xs={12} sm={6} md={3}>
            <HomeCard product={datan} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
