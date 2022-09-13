import { Box, Stack, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { FC } from "react";



const CartForm: FC = () => {

    return(
<div>
<Box
          component="form"
          sx={{
            "@ .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          paddingBottom="2rem"
          paddingTop="1rem"
        >
          <Stack spacing={2} direction="row" display="flex">
            <TextField id="FirstName" label="Förnamn" variant="standard" />
            <TextField id="LastName" label="Efternamn" variant="standard" />
          </Stack>

          <Stack spacing={2} direction="row" display="flex">
            <TextField
              id="Phonenumber"
              label="Mobilnummer"
              variant="standard"
            />
            <TextField
              id="emailadress"
              label="Epost adress"
              variant="standard"
            />
          </Stack>

          <Stack spacing={2} direction="row" display="flex">
            <TextField id="adress-one" label="Adress" variant="standard" />
            <TextField
              id="PostalNumber"
              label="Postnummer"
              variant="standard"
            />
          </Stack>
        </Box>

        <Box paddingBottom="1rem">
          <Stack spacing={2} direction="row">
            <FormControl>
              <FormLabel id="shippingAnddeliveryOptions">
                Leveransalternativ
              </FormLabel>
              <RadioGroup
                aria-labelledby="shippingAnddeliveryOptions"
                defaultValue="Gratis"
                name="shipping-buttons-group"
              >
                <FormControlLabel
                  value="Gratis"
                  control={<Radio />}
                  label="Standard - 150 kr, 3-5 dagars leveranstid"
                />
                <FormControlLabel
                  value="Express"
                  control={<Radio />}
                  label="Express - 500 kr, 1-2 dagars leveranstid"
                />
                <FormControlLabel
                  value="Hämta"
                  control={<Radio />}
                  label="Hämta i butiken - Gratis, hämtas nästföljande dag"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
</div>
)}

export default CartForm;