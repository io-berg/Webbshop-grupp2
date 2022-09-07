import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import HomeCard from "../components/HomeCard";
import { data } from "../utils/mockData";

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={3} marginTop={1} marginBottom={4}>
        {data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <HomeCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
