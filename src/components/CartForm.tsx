import { Stack, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface Props {
    onSubmit: (values:PersonDetails) => void;
}

interface PersonDetails {
firstName: string,
lastName: string,
phoneNumber: string,
emailAdress: string,
adress: string,
postalNumber: string,
}

type PersonDetailRecord = Record<keyof PersonDetails, Yup.AnySchema>;

const PersonalDetailsSchema = Yup.object().shape<PersonDetailRecord>({
    firstName: Yup.string().min(1).required("Förnamn krävs"),
    lastName: Yup.string().min(1).required("Efternamn krävs"),
    phoneNumber: Yup.number().min(1).required("Telefonnummer krävs"),
    emailAdress: Yup.string().email().required("Epost krävs"),
    adress: Yup.string().min(1).required("Adress krävs"),
    postalNumber: Yup.string()
    .min(1).required("Postnummer krävs")
    .length(5, ("Postnummer måste vara 5 tecken långt"))
    
});

const CartForm: FC<Props> = ({onSubmit}) => {
    const navigate=useNavigate();
    const formik = useFormik<PersonDetails>({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAdress: "",
            adress: "",
            postalNumber: "",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: PersonalDetailsSchema,
        onSubmit: (values) => {
            onSubmit(values);
        },
    })

    return(
<div>
<form onSubmit={formik.handleSubmit}
        >
          <Stack spacing={2} direction="row">
            <TextField 
            id="firstName" 
            label="Förnamn" 
            variant="standard"
            name="firstName"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField 
            id="LastName"
            label="Efternamn" 
            variant="standard"
            name="lastName"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>

          <Stack spacing={2} direction="row" display="flex">
            <TextField
            id="phoneNumber"
            label="Mobilnummer"
            variant="standard"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            <TextField
            id="emailAdress"
            label="Epost adress"
            variant="standard"
            name="emailAdress"
            value={formik.values.emailAdress}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.emailAdress && formik.errors.emailAdress)}
            helperText={formik.touched.emailAdress && formik.errors.emailAdress}
            />
          </Stack>

          <Stack spacing={2} direction="row" display="flex">
            <TextField 
            id="adress"
            label="Adress"
            variant="standard"
            name="adress"
            value={formik.values.adress}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.adress && formik.errors.adress)}
            helperText={formik.touched.adress && formik.errors.adress}
            />
            <TextField
            id="postalNumber"
            label="Postnummer"
            variant="standard"
            name="postalNumber"
            value={formik.values.postalNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.postalNumber && formik.errors.postalNumber)}
            helperText={formik.touched.postalNumber && formik.errors.postalNumber}
              
            />
          </Stack>

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

            <Stack spacing={3} direction="row" paddingBottom="2rem">
                <Button type="submit" variant="contained">Fortsätt till betalning</Button>
                <Button onClick={() => navigate("/")} variant="contained">
                    Avbryt beställning
                </Button>
        </Stack>

            </FormControl>
          </Stack>
        </form>
</div>
)}

export default CartForm;