// src/pages/CheckoutPage.js
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();

  // Estados
  const [selectedEnvio, setSelectedEnvio] = useState(null);
  const [selectedPago, setSelectedPago] = useState(null);

  // Opciones de envío
  const envios = [
    { id: "servientrega", nombre: "Servientrega", logo: require("../assets/servientrega.jpg") },
    { id: "interrapidisimo", nombre: "Interrapidísimo", logo: require("../assets/inter-rapidisimo.png") },
    { id: "coordinadora", nombre: "Coordinadora", logo: require("../assets/coordinadora.png") },
    { id: "envia", nombre: "Envia", logo: require("../assets/envia.jpg") },
  ];

  // Opciones de pago
  const pagos = [
    { id: "efecty", nombre: "Efecty", logo: require("../assets/efecty.png") },
    { id: "pse", nombre: "PSE", logo: require("../assets/pse.png") },
    { id: "visa", nombre: "Visa", logo: require("../assets/visa.png") },
    { id: "bancolombia", nombre: "Bancolombia", logo: require("../assets/bancolombia.png") },
  ];

  // Confirmar y redirigir
  const handleConfirm = () => {
    if (!selectedEnvio || !selectedPago) {
      alert("⚠️ Debes seleccionar un método de envío y un método de pago.");
      return;
    }

    navigate("/success", {
      state: {
        envio: selectedEnvio,
        pago: selectedPago,
        productos: cart,
        total,
      },
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 fw-bold">💳 Finalizar Compra</h1>

      <div className="d-flex flex-column align-items-center">
        {/* Resumen del pedido */}
        <Card className="shadow-lg mb-4 p-4 checkout-card text-center">
          <h4 className="fw-bold mb-3">🛍️ Resumen de tu Pedido</h4>
          <p>{cart.length} producto(s)</p>
          <p>Subtotal: <strong>${total.toLocaleString()}</strong></p>
          <p>Entrega: <span className="text-success">Gratis</span></p>
          <h5 className="mt-2">Total: <span className="text-primary fw-bold">${total.toLocaleString()}</span></h5>
        </Card>

        {/* Métodos de envío */}
        <Card className="shadow-lg mb-4 p-4 checkout-card">
          <h5 className="fw-bold mb-4 text-center">🚚 Selecciona un Método de Envío</h5>
          <div className="checkout-logos">
            {envios.map((envio) => (
              <div
                key={envio.id}
                className={`checkout-option ${selectedEnvio === envio.nombre ? "selected" : ""}`}
                onClick={() => setSelectedEnvio(envio.nombre)}
              >
                <img src={envio.logo} alt={envio.nombre} />
                <p>{envio.nombre}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Métodos de pago */}
        <Card className="shadow-lg mb-4 p-4 checkout-card">
          <h5 className="fw-bold mb-4 text-center">💵 Selecciona un Método de Pago</h5>
          <div className="checkout-logos">
            {pagos.map((pago) => (
              <div
                key={pago.id}
                className={`checkout-option ${selectedPago === pago.nombre ? "selected" : ""}`}
                onClick={() => setSelectedPago(pago.nombre)}
              >
                <img src={pago.logo} alt={pago.nombre} />
                <p>{pago.nombre}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Botón confirmar */}
        <Button variant="success" size="lg" className="w-100 fw-bold shadow-sm" onClick={handleConfirm}>
          ✅ Confirmar y Pagar
        </Button>

        {/* Botón volver */}
        <Button
          variant="outline-secondary"
          className="mt-3 w-100 fw-bold"
          onClick={() => navigate("/cart")}
        >
          ⬅️ Volver al carrito
        </Button>
      </div>
    </Container>
  );
}

export default CheckoutPage;
