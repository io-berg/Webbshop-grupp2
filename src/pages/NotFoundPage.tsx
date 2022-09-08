import { Container, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Sidan hittades inte
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
