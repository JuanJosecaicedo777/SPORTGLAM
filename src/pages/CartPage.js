
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}{" "}
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
