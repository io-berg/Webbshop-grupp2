import { Alert, Snackbar } from "@mui/material";
import { useSnack } from "../contexts/SnackContext";

const SnackBarComponent = () => {
  const { snack, handleClose } = useSnack();

  if (!snack) return null;
  return (
    <Snackbar
      key={snack.id}
      open={snack.open}
      autoHideDuration={snack.autoHideDuration}
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
