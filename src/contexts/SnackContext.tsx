import { AlertColor } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Snack {
  message: string;
  color: AlertColor;
  open: boolean;
}

interface ContextValue {
  snack: Snack;
  addNewSnack: (snack: Snack) => void;
  handleClose: (reason?: string) => void;
}

const SnackContext = createContext<ContextValue>({
  snack: {
    message: "You forgot to add the SnackProvider",
    color: "error",
    open: true,
  },
  addNewSnack: () => {
    console.log("You forgot to add the SnackProvider");
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

  const handleClose = (reason?: string) => {
    if (reason === "clickaway") return;

    setSnack({ ...snack, open: false });
  };

  const addNewSnack = (snack: Snack) => {
    setSnack(snack);
  };

  return (
    <SnackContext.Provider value={{ snack, addNewSnack, handleClose }}>
      {children}
    </SnackContext.Provider>
  );
}

export const useSnack = () => useContext(SnackContext);
export default SnackProvider;
