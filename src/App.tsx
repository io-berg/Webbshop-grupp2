import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductProvider from "./contexts/ProductContext";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
