import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartProvider from "./contexts/CartContext";
import ProductProvider from "./contexts/ProductContext";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CartProvider>
            <Layout />
          </CartProvider>
        }
      >
        <Route index element={<HomePage />} />

        {/* Regular pages go here ^ */}
      </Route>

      <Route
        path="/admin"
        element={
          <ProductProvider>
            <Layout admin />
          </ProductProvider>
        }
      >
        <Route index element={<AdminPage />} />

        {/* Admin pages go here ^ */}
      </Route>
    </Routes>
  );
}

export default App;
