import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./SuccessPage.css";

function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { envio, pago, productos, total } = location.state || {};

  // Mapear métodos de envío con sus logos
  const envios = {
    Servientrega: require("../assets/servientrega.jpg"),
    "Interrapidísimo": require("../assets/inter-rapidisimo.png"),
    Coordinadora: require("../assets/coordinadora.png"),
    Envia: require("../assets/envia.jpg"),
  };

  // Mapear métodos de pago con sus logos
  const pagos = {
    Efecty: require("../assets/efecty.png"),
    PSE: require("../assets/pse.png"),
    Visa: require("../assets/visa.png"),
    Bancolombia: require("../assets/bancolombia.png"),
  };

  return (
    <Container className="my-5 text-center">
      <Card className="p-4 shadow-lg success-card">
        <h3 className="mb-4">✅ PAGO REALIZADO EXITOSAMENTE</h3>

        {/* Mostrar resumen del total */}
        <h4 className="mb-3">
          <strong>${total?.toLocaleString()}</strong>
        </h4>

        {/* Envío */}
        <div className="mb-4">
          <h5>🚚 Envío con:</h5>
          {envio && (
            <div>
              <img
                src={envios[envio]}
                alt={envio}
                style={{ width: "120px", margin: "10px 0" }}
              />
              <p><b>{envio}</b></p>
            </div>
          )}
        </div>

        {/* Pago */}
        <div className="mb-4">
          <h5>💳 Pago con:</h5>
          {pago && (
            <div>
              <img
                src={pagos[pago]}
                alt={pago}
                style={{ width: "120px", margin: "10px 0" }}
              />
              <p><b>{pago}</b></p>
            </div>
          )}
        </div>

        <h4 className="mt-3">🎉 ¡Gracias por tu compra!</h4>

        {/* Botón para volver */}
        <Button
          variant="primary"
          className="mt-4"
          onClick={() => navigate("/dashboard")}
        >
          Volver a la tienda
        </Button>
      </Card>
    </Container>
  );
}

export default SuccessPage;
