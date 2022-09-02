import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ProductPage />} />
        <Route path="/" element={<CartPage />} /> */}

        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/" element={<CreatePage />} />
        <Route path="/" element={<EditPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
