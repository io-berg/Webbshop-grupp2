import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

interface Props {
  handleSubmit: (values: PersonDetails) => void;
  handleCancel: () => void;
}

interface PersonDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAdress: string;
  adress: string;
  postalNumber: string;
}

type PersonDetailRecord = Record<keyof PersonDetails, Yup.AnySchema>;

const PersonalDetailsSchema = Yup.object().shape<PersonDetailRecord>({
  firstName: Yup.string().min(1).required("Förnamn krävs"),
  lastName: Yup.string().min(1).required("Efternamn krävs"),
  phoneNumber: Yup.string().matches(
    /^(\+46|0)[0-9]{8,9}$/, "Telefonnummer måste vara i formatet 0701234567 eller +46701234567"
  ).min(1).required("Telefonnummer krävs"),
  emailAdress: Yup.string().email().required("Epost krävs"),
  adress: Yup.string().min(1).required("Adress krävs"),
  postalNumber: Yup.string()
    .min(1)
    .matches(/^[0-9]{3} [0-9]{2}$/, "Postnummer måste vara i formatet 123 45")
    .required("Postnummer krävs"),
});

const CartForm: FC<Props> = ({ handleSubmit, handleCancel }) => {
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
      handleSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full max-w-[50rem] mt-5"
      name="personalDetails"
      id="personalDetails"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <TextField
          fullWidth
          id="firstName"
          label="Förnamn"
          variant="standard"
          name="firstName"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          autoComplete="billing given-name"
        />
        <TextField
          fullWidth
          id="LastName"
          label="Efternamn"
          variant="standard"
          name="lastName"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.lastName && formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          autoComplete="billing family-name"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <TextField
          fullWidth
          id="phoneNumber"
          type="tel"
          label="Mobilnummer"
          variant="standard"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(
            formik.touched.phoneNumber && formik.errors.phoneNumber
          )}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          autoComplete="billing tel"
        />
        <TextField
          fullWidth
          id="emailAdress"
          label="Epost adress"
          variant="standard"
          name="emailAdress"
          type="email"
          value={formik.values.emailAdress}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(
            formik.touched.emailAdress && formik.errors.emailAdress
          )}
          helperText={formik.touched.emailAdress && formik.errors.emailAdress}
          autoComplete="billing email"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <TextField
          fullWidth
          id="adress"
          label="Adress"
          variant="standard"
          name="adress"
          value={formik.values.adress}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.adress && formik.errors.adress)}
          helperText={formik.touched.adress && formik.errors.adress}
          autoComplete="billing street-address"
        />
        <TextField
          fullWidth
          id="postalNumber"
          label="Postnummer"
          variant="standard"
          name="postalNumber"
          value={formik.values.postalNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(
            formik.touched.postalNumber && formik.errors.postalNumber
          )}
          helperText={formik.touched.postalNumber && formik.errors.postalNumber}
          autoComplete="billing postal-code"
        />
      </div>

      <div className="pt-8">
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
        <div className="flex justify-center gap-5 w-full mt-3">
          <Button type="submit" variant="contained">
            Fortsätt till betalning
          </Button>
          <Button onClick={handleCancel} color="warning" variant="contained">
            Avbryt beställning
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CartForm;
