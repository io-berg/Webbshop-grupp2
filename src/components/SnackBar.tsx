import { Alert, Snackbar } from "@mui/material";
import { useSnack } from "../contexts/SnackContext";

const SnackBarComponent = () => {
  const { snack, handleClose } = useSnack();

  return (
    <Snackbar
      open={snack.open}
      autoHideDuration={3000}
      onClose={(e, r) => handleClose(r)}
    >
      <Alert
        severity={snack.color}
        sx={{ width: "100%" }}
        onClose={() => handleClose()}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};
export default SnackBarComponent;
