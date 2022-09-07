import { Alert, Snackbar } from "@mui/material";
import { useSnack } from "../contexts/SnackContext";

const SnackBarComponent = () => {
  const { snack, handleClose } = useSnack();

  return (
    <div>
      {snack.map((s) => {
        return (
          <Snackbar
            key={snack.indexOf(s)}
            open={s.open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={s.color}
              sx={{ width: "100%" }}
            >
              {s.message}
            </Alert>
          </Snackbar>
        );
      })}
    </div>
  );
};
export default SnackBarComponent;
