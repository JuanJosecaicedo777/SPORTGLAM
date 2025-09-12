import React, { useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  return (
    <Container className="cart-page mt-4">
      <Row>
        {/* 🔹 Columna izquierda: Productos */}
        <Col md={8}>
          <h2 className="mb-4">TU CARRITO</h2>
          <p>
            TOTAL ({cart.length} producto{cart.length !== 1 && "s"}){" "}
            <strong>${total.toLocaleString()}</strong>
          </p>
          <p className="text-muted">
            Los artículos en tu carrito no están reservados. Termina el proceso de compra ahora para hacerte con ellos.
          </p>

          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex align-items-center mb-4 p-3 shadow-sm rounded"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img me-3"
                />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p className="text-muted">Tamaño: M</p>
                  <p className="fw-bold">${item.price.toLocaleString()}</p>
                  <div className="d-flex align-items-center gap-3">
                    <Form.Select
                      size="sm"
                      style={{ width: "80px" }}
                      value={item.qty}
                      onChange={(e) =>
                        console.log("Actualizar cantidad:", e.target.value)
                      }
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </Form.Select>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </Col>

        {/* 🔹 Columna derecha: Resumen */}
        <Col md={4}>
          <div className="order-summary p-4 shadow-sm rounded">
            <h4 className="mb-3">RESUMEN DEL PEDIDO</h4>
            <div className="d-flex justify-content-between">
              <span>{cart.length} producto(s)</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Entrega</span>
              <span>Gratis</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>

            {/* Código promocional */}
            <Form className="mt-3">
              <Form.Control type="text" placeholder="Usa un código promocional" />
            </Form>

            {/* Botón pagar */}
            <Button className="w-100 mt-3" variant="dark" size="lg">
              IR A PAGAR →
            </Button>

            {/* Métodos de pago */}
            <div className="payment-methods mt-3 text-center">
              <img src="/IMG/pse.png" alt="PSE" />
              <img src="/IMG/visa.png" alt="Visa" />
              <img src="/IMG/mastercard.png" alt="MasterCard" />
              <img src="/IMG/efecty.png" alt="Efecty" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
