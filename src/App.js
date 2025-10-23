// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

// 🔹 Páginas principales
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CartPage from "./pages/CartPage";
import ProductosPage from "./pages/ProductosPage";
import CategoriasPage from "./pages/CategoriasPage";
import ContactoPage from "./pages/ContactoPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import HistorialComprasPage from "./pages/HistorialComprasPage/HistorialComprasPage";

// ✅ Nueva página de perfil
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Autenticación */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />

          {/* Páginas principales */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* ✅ Nueva ruta */}

          {/* Carrito y pago */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* Productos */}
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/:categoria" element={<ProductosPage />} />

          {/* Categorías */}
          <Route path="/categorias" element={<CategoriasPage />} />

          {/* Otras páginas */}
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/historial" element={<HistorialComprasPage />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
