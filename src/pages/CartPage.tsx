import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import NavCrumbs from "../components/NavCrumbs";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



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
                <Button variant="contained">Fortsätt</Button>
                <Button variant="contained">Avbryt</Button>
            </Stack>

            


        </Box>

        <Box>
            <h1>
                Fyll i dina uppgifter:
            </h1>

            <Box
            component="form"
            sx={{
                '@ .MuiTextField-root': {m: 1, width: '100%'},            
            }}
            noValidate
            autoComplete="off" >

            <Stack spacing={2} direction="row">
            <TextField id="FirstName" label="Förnamn" variant="standard" />
                <TextField id="LastName" label="Efternamn" variant="standard" />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField id="Adress" label="Adress" variant="standard" />
                <TextField id="PostalNumber" label="Postnummer" variant="standard" />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField id="Phonenumber" label="Mobilnummer" variant="standard" />
                <TextField id="emailadress" label="Epost adress" variant="standard" />
            </Stack>


            <div>
                <h1>Leverans och frakt</h1>
            </div>

            <Stack spacing={2} direction="row">
                <FormControl>
                    <FormLabel id="shippingAnddeliveryOptions">Leveransalternativ</FormLabel>
                    <RadioGroup
                        aria-labelledby="shippingAnddeliveryOptions"
                        defaultValue="Gratis"
                        name="shipping-buttons-group"
                    >
                       <FormControlLabel value="Gratis" control={<Radio />} label="Standard - 150 kr, 3-5 dagars leveranstid" />
                       <FormControlLabel value="Express" control={<Radio />} label="Express - 500 kr, 1-2 dagars leveranstid" />
                        <FormControlLabel value="Hämta" control={<Radio />} label="Hämta i butiken - Gratis, hämtas nästföljande dag" />
                    </RadioGroup>
                </FormControl>
            </Stack>




            </Box>



            <Stack spacing={3} direction="row">
                <Button variant="contained">Fortsätt till betalning</Button>
                <Button variant="contained">Avbryt beställning</Button>
            </Stack>

            
        </Box>

        </Container>


    );
};

export default CartPage;