// src/pages/SuccessPage.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./SuccessPage.css";

function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { envio, pago, productos = [], total = 0 } = location.state || {};

  // 🔹 Logos de envíos
  const enviosLogos = {
    Servientrega: require("../assets/servientrega.jpg"),
    "Interrapidísimo": require("../assets/inter-rapidisimo.png"),
    Coordinadora: require("../assets/coordinadora.png"),
    Envia: require("../assets/envia.jpg"),
  };

  // 🔹 Logos de pagos
  const pagosLogos = {
    Efecty: require("../assets/efecty.png"),
    PSE: require("../assets/pse.png"),
    Visa: require("../assets/visa.png"),
    Bancolombia: require("../assets/bancolombia.png"),
  };

  // 📄 Generar Factura PDF
  const generarFacturaPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Factura Virtual - SportGlam", 14, 20);
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);

    doc.setFontSize(12);
    doc.text(`Método de Envío: ${envio || "No especificado"}`, 14, 40);
    doc.text(`Método de Pago: ${pago || "No especificado"}`, 14, 50);
    doc.text(`Fecha: ${new Date().toLocaleString()}`, 14, 60);

    // Tabla de productos
    const tablaProductos = productos.map((p, index) => {
      const nombre = p.name || p.nombre || "Producto";
      const cantidad = p.quantity || p.cantidad || 1;
      const precio = p.price || p.precio || 0;
      const subtotal = cantidad * precio;

      return [
        index + 1,
        nombre,
        cantidad,
        `$${precio.toLocaleString()}`,
        `$${subtotal.toLocaleString()}`,
      ];
    });

    autoTable(doc, {
      startY: 70,
      head: [["#", "Producto", "Cantidad", "Precio", "Subtotal"]],
      body: tablaProductos,
    });

    doc.setFontSize(14);
    doc.text(`Total: $${total.toLocaleString()}`, 14, doc.lastAutoTable.finalY + 15);

    doc.setFontSize(12);
    doc.text("Gracias por tu compra en SportGlam 💖", 14, doc.lastAutoTable.finalY + 30);

    doc.save("factura_sportglam.pdf");
  };

  return (
    <Container className="my-5 text-center">
      <Card className="p-4 shadow-lg rounded-4">
        <h2>✅ ¡Compra Exitosa!</h2>
        <p>Tu pedido ha sido procesado correctamente.</p>

        {/* Mostrar datos reales */}
        {envio && (
          <div className="mb-3">
            <h5>🚚 Método de Envío:</h5>
            <img
              src={enviosLogos[envio]}
              alt={envio}
              style={{ width: "120px", margin: "10px 0" }}
            />
            <p><b>{envio}</b></p>
          </div>
        )}

        {pago && (
          <div className="mb-3">
            <h5>💳 Método de Pago:</h5>
            <img
              src={pagosLogos[pago]}
              alt={pago}
              style={{ width: "120px", margin: "10px 0" }}
            />
            <p><b>{pago}</b></p>
          </div>
        )}

        <h5><strong>Total Pagado:</strong> ${total.toLocaleString()}</h5>

        {/* Botones de acción */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="primary"
            onClick={generarFacturaPDF}
            style={{
              fontSize: "14px",
              padding: "8px 16px",
              minWidth: "180px",
            }}
          >
            📄 Descargar Factura
          </Button>

          <Button
            variant="success"
            onClick={() => navigate("/dashboard")}
            style={{
              fontSize: "14px",
              padding: "8px 16px",
              minWidth: "180px",
            }}
          >
            🏬 Volver a la tienda
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default SuccessPage;
