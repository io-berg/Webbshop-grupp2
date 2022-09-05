import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductProvider from "./contexts/ProductContext";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ProductPage />} />
        <Route path="/" element={<CartPage />} /> */}

        {/* Admin pages go here ^ */}
      </Route>
    </Routes>
  );
}

export default App;
