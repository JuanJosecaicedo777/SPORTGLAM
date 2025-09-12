// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// 🔹 Importar páginas
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CartPage from "./pages/CartPage/CartPage"; 

function App() {
  const [cart, setCart] = useState([]);

  // 🔹 Función para agregar productos al carrito
  const agregarCarrito = (product) => {
    setCart([...cart, product]);
  };

  // 🔹 Función para eliminar un producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  // 🔹 Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // 🔹 Calcular total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Página de inicio -> redirige a Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

        {/* Rutas privadas */}
        <Route
          path="/dashboard"
          element={<DashboardPage agregarCarrito={agregarCarrito} />}
        />

        {/* Carrito */}
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              total={total}
            />
          }
        />

        {/* Si no existe la ruta, redirige al login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
