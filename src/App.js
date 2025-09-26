// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; 

// 🔹 Importar páginas
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

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Página de inicio -> redirige a Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Rutas de autenticación */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />

          {/* Rutas privadas */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Carrito y pago */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="/success" element={<SuccessPage />} /> 

          {/* Productos */}
          <Route path="/productos" element={<ProductosPage />} />           {/* Todos los productos */}
          <Route path="/productos/:categoria" element={<ProductosPage />} /> {/* Productos por categoría */}

          {/* Categorías */}
          <Route path="/categorias" element={<CategoriasPage />} />

          {/* Otras páginas */}
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
