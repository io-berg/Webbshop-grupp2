import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SnackProvider from "./contexts/SnackContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </SnackProvider>
    </BrowserRouter>
  </React.StrictMode>
);
