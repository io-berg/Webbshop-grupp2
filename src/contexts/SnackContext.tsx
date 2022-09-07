import { AlertColor } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Snack {
  message: string;
  color: AlertColor;
  open: boolean;
}

interface ContextValue {
  snack: Snack;
  setSnack: (snack: Snack) => void;
  handleClose: () => void;
}

const SnackContext = createContext<ContextValue>({
  snack: {
    message: "",
    color: "error",
    open: false,
  },
  setSnack(snack) {
    console.log("error:" + snack.message);
  },
  handleClose: () => {
    console.log("något gick fel");
  },
});

interface Props {
  children: ReactNode;
}

function SnackProvider({ children }: Props) {
  const [snack, setSnack] = useState<Snack>({
    message: "",
    color: "error",
    open: false,
  });

  const handleClose = () => {
    setSnack({
      message: "",
      color: "success",
      open: false,
    });
  };

  return (
    <SnackContext.Provider value={{ snack, setSnack, handleClose }}>
      {children}
    </SnackContext.Provider>
  );
}

export const useSnack = () => useContext(SnackContext);
export default SnackProvider;
