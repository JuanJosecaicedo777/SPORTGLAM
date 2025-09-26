// src/contexts/CartContext.js
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🔹 Agregar producto al carrito
  const addToCart = (product) => {
    if (!product.id || !product.nombre || !product.precio) {
      console.warn("Producto inválido:", product);
      return;
    }

    setCart((prev) => {
      const existe = prev.find((p) => p.id === product.id);
      if (existe) {
        // Si ya existe, aumenta la cantidad
        return prev.map((p) =>
          p.id === product.id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
        );
      }
      // Si no existe, lo agrega con cantidad 1
      return [...prev, { ...product, cantidad: 1 }];
    });

    // ✅ SweetAlert de confirmación
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.nombre} fue agregado al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // 🔹 Eliminar producto por id
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔹 Vaciar carrito
  const clearCart = () => setCart([]);

  // 🔹 Calcular total de manera segura
  const total = cart.reduce(
    (acc, item) =>
      acc + (item.precio ? item.precio * (item.cantidad || 1) : 0),
    0
  );

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
