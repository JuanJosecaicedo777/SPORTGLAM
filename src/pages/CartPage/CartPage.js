import React from "react";

const CartPage = ({ cart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
