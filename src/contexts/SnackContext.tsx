import { AlertColor } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Snack {
  id: number;
  message: string;
  color: AlertColor;
  open: boolean;
}

interface ContextValue {
  snack?: Snack;
  addNewSnack: (message: string, color: AlertColor) => void;
  handleClose: (reason?: string) => void;
}

const SnackContext = createContext<ContextValue>({
  snack: {
    id: 0,
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
  const [snacks, setSnacks] = useState<Snack[]>([]);

  const handleClose = (reason?: string) => {
    if (reason === "clickaway") return;

    setSnacks((prevState) => prevState.slice(1));
  };

  const addNewSnack = (message: string, color: AlertColor) => {
    setSnacks((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        message: message,
        color: color,
        open: true,
      },
    ]);
  };

  return (
    <SnackContext.Provider
      value={{ snack: snacks[0], addNewSnack, handleClose }}
    >
      {children}
    </SnackContext.Provider>
  );
}

export const useSnack = () => useContext(SnackContext);
export default SnackProvider;
