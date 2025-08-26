import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [cart, setCart] = useState([]);

  const agregarCarrito = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage agregarCarrito={agregarCarrito} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
