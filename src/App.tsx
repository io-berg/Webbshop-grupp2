import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartProvider from "./contexts/CartContext";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
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
        <Route path="product/:Id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Regular pages go here ^ */}
      </Route>

      <Route path="/admin" element={<Layout admin />}>
        <Route index element={<AdminPage />} />
        <Route path="edit/:Id" element={<EditPage />} />
        <Route path="create" element={<CreatePage />} />
        {/* Admin pages go here ^ */}
      </Route>
    </Routes>
  );
}

export default App;
