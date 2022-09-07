import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  const txtColor = "#bdbdbd";

  return (
    <footer className="w-full bg-gray-700 p-4">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h6"
                color={txtColor}
                align="center"
                borderBottom={1}
              >
                Kontakt &amp; Kundtjänst
              </Typography>
              <Typography variant="subtitle1" align="center" color={txtColor}>
                Telefon: 01-234 56 78
              </Typography>
              <Typography variant="subtitle1" align="center" color={txtColor}>
                E-post:
                <a href="mailto:fakemail@fake.com"> Fakemail@veryfake.com</a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h6"
                color={txtColor}
                align="center"
                borderBottom={1}
              >
                Våra Butiker
              </Typography>
              <Typography variant="subtitle1" align="center" color={txtColor}>
                Du är välkommen till våra 0 butiker i Sverige. Från Malmö i syd
                till Luleå i norr.
              </Typography>
              <div className="flex align-center w-100 justify-center pt-5">
                <Button
                  href="https://www.google.com/maps/search/Blommor/"
                  target="_blank"
                  variant="outlined"
                >
                  Hitta din butik
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h6"
                color={txtColor}
                align="center"
                borderBottom={1}
              >
                Information
              </Typography>
              <Typography variant="subtitle1" color={txtColor} align="center">
                <a
                  href="https://github.com/io-berg/Webbshop-grupp2"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
