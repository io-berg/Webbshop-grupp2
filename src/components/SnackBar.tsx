import { Alert, Snackbar } from "@mui/material";
import { useSnack } from "../contexts/SnackContext";

const SnackBarComponent = () => {
  const { snack, handleClose } = useSnack();
  return (
    <Snackbar open={snack.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={snack.color}
        sx={{ width: "100%" }}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarComponent;
