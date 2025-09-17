
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const agregarCarrito = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Eliminar producto por índice
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, agregarCarrito, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
