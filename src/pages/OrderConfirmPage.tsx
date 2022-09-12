import { Box, Button, Container } from "@mui/material"
import { FC } from "react"
import NavCrumbs from "../components/NavCrumbs"


const OrderConfirmPage: FC = () => {

  return (
    <Container>
    <NavCrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "OrderConfirmation", path: "/orderconfirmation" },
        ]} />

        <Box>
            <h1>
                Tack för din beställning! 🌻
            </h1>

          <Button href="/" variant="contained">
            Tillbaka till startsidan
          </Button>

        </Box>
        
    </Container>
    

)};

export default OrderConfirmPage;