import { AlertColor } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Snack {
  message: string;
  color: AlertColor;
  open: boolean;
}

interface ContextValue {
  snack: Snack[];
  addNewSnack: (snack: Snack) => void;
  handleClose: () => void;
}

const SnackContext = createContext<ContextValue>({
  snack: [],
  addNewSnack(snack) {
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
  const [snack, setSnack] = useState<Snack[]>([]);

  const addNewSnack = (newSnack: Snack) => {
    setSnack((prevState) => [...prevState, newSnack]);
  };

  const handleClose = () => {
    setSnack((prevState) => prevState.slice(1));
  };

  return (
    <SnackContext.Provider value={{ snack, addNewSnack, handleClose }}>
      {children}
    </SnackContext.Provider>
  );
}

export const useSnack = () => useContext(SnackContext);
export default SnackProvider;
