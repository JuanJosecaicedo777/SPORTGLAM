// src/pages/CartPage.js
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Table, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CartPage.css"; // 🔹 CSS personalizado

function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de pagar.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4 cart-card">
        <h1 className="text-center mb-4 cart-title">🛒 Carrito de Compras</h1>

        {cart.length === 0 ? (
          <Alert variant="info" className="text-center">
            Tu carrito está vacío. ¡Agrega productos desde la tienda!
          </Alert>
        ) : (
          <>
            <Table striped bordered hover responsive className="shadow-sm cart-table">
              <thead className="table-dark text-center">
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="text-center align-middle">
                    <td>{index + 1}</td>
                    <td className="fw-bold">{item.name}</td>
                    <td className="text-success fw-semibold">${item.price.toLocaleString()}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="btn-delete"
                        onClick={() => removeFromCart(index)}
                      >
                        ❌ Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h3 className="fw-bold text-primary">
                Total: <span className="text-success">${total.toLocaleString()}</span>
              </h3>
              <div className="d-flex gap-2">
                <Button variant="outline-warning" className="btn-clear" onClick={clearCart}>
                  🗑️ Vaciar carrito
                </Button>
                <Button variant="success" className="btn-pay" onClick={handlePayment}>
                  💳 Proceder al pago
                </Button>
              </div>
            </div>
          </>
        )}

        {/* 🔹 Botón volver */}
        <div className="mt-4 text-center">
          <Button variant="secondary" className="btn-back" onClick={() => navigate("/dashboard")}>
            ⬅️ Volver a la tienda
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default CartPage;
