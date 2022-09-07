import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";


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

            


        </Box>

        <Box>
            <h1>
                Hello Checkout 💻
                (Under Construction)
            </h1>
        </Box>

        </Container>


    );
};

export default CartPage;