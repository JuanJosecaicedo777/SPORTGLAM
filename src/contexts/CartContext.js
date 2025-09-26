import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🔹 Agregar producto
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    // ✅ Alerta de éxito
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.name} fue agregado al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // 🔹 Eliminar producto por índice
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔹 Vaciar carrito
  const clearCart = () => setCart([]);

  // 🔹 Calcular total
  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,      
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
