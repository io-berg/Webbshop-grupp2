import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartProvider from "./contexts/CartContext";
import ProductProvider from "./contexts/ProductContext";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

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
      <Route path="/product" element={<Layout />}>
        <Route index element={<ProductPage />} />
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
        <Route path="edit/:Id" element={<EditPage />} />
        {/* Admin pages go here ^ */}
      </Route>
    </Routes>
  );
}

export default App;
