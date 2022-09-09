import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: green[400],
    },
  },
});

export default theme;
