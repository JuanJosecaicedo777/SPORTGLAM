import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();

  // 🔹 Redirigir al checkout en lugar de mostrar alert
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de pagar.");
      return;
    }
    navigate("/checkout"); // 👈 Te lleva a la página de Checkout
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">🛒 Carrito de Compras</h1>

      {cart.length === 0 ? (
        <Alert variant="info" className="text-center">
          Tu carrito está vacío. ¡Agrega productos desde la tienda!
        </Alert>
      ) : (
        <>
          <Table striped bordered hover responsive className="shadow-sm">
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
                  <td>{item.name}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h3>Total: ${total.toLocaleString()}</h3>
            <div className="d-flex gap-2">
              <Button variant="warning" onClick={clearCart}>
                Vaciar carrito
              </Button>
              <Button variant="success" onClick={handlePayment}>
                Proceder al pago
              </Button>
            </div>
          </div>
        </>
      )}

      {/* 🔹 Botón para volver a la tienda */}
      <div className="mt-4 text-center">
        <Button variant="secondary" onClick={() => navigate("/dashboard")}>
          ⬅️ Volver a la tienda
        </Button>
      </div>
    </Container>
  );
}

export default CartPage;
