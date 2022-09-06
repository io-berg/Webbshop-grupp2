import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartProvider from "./contexts/CartContext";
import ProductProvider from "./contexts/ProductContext";
import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
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
        <Route path="edit/:Id" element={<EditPage />} />
        <Route path="create" element={<CreatePage />} />
        {/* Admin pages go here ^ */}
      </Route>
    </Routes>
  );
}

export default App;
