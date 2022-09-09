import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Product } from "../utils/types";


const CartPage: FC= () => {

  
    return (

        <Container>
            <NavCrumbs
            crumbs={[
                { name: "Home", path:"/"},
                { name: "Cart", path: "/Cart"},
            ]}
            />

        <Box>
            <h1>
                Hello CartPage 🛒
                (Under construction)

            </h1>

            <Stack spacing={2} direction="row">
                <Button variant="contained">Fortsätt till betalning</Button>
                <Button variant="contained">Avbryt</Button>
            </Stack>

            


        </Box>

        <Box>
            <h1>
                Hello Checkout 💻
                (Under Construction)
            </h1>

            <Stack spacing={2} direction="row">
                <Button variant="contained">Godkänn beställning</Button>
                <Button variant="contained">Avbryt beställning</Button>
            </Stack>

            
        </Box>

        </Container>


    );
};

export default CartPage;