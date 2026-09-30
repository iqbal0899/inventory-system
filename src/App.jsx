import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import Products from "./pages/products/products";
import Stock from "./pages/stock/stock";
import Request from "./pages/requests/requests";
import Supplier from "./pages/suppliers/suppliers";
import Report from "./pages/reports/reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;