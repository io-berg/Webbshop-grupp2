import { Container } from "@mui/material";
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

        <div>
            <h1>
                Hello CartPage 🛒
            </h1>
        </div>

        <div>
            <h1>
                Hello Checkout 💻
            </h1>
        </div>

        </Container>


    );
};

export default CartPage;