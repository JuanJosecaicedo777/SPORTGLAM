// src/pages/HistorialComprasPage/HistorialComprasPage.js
import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HistorialComprasPage.css";

const HistorialComprasPage = () => {
  const [compras, setCompras] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  // 🔹  datos de ejemplo 
  useEffect(() => {
    setTimeout(() => {
      const datosEjemplo = [
        {
          id: "001",
          fecha: "2025-10-10",
          productos: ["Camiseta deportiva adidas",],
          total: 120000,
          estado: "Entregado",
        },
        {
          id: "002",
          fecha: "2025-09-20",
          productos: ["Tenis puma",],
          total: 220000,
          estado: "En envío",
        },
      ];
      setCompras(datosEjemplo);
      setCargando(false);
    }, 1500);
  }, []);

  return (
    <Container className="historial-container">
      <h2 className="text-center mb-4">🛍️ Historial de Compras</h2>

      {/* 🔙 Botón de Regresar */}
      <div className="text-center mb-4">
        <Button
          variant="secondary"
          onClick={() => navigate(-1)} // Vuelve a la página anterior
          className="rounded-pill px-4"
        >
          ← Regresar
        </Button>
      </div>

      {cargando ? (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
          <p>Cargando tus compras...</p>
        </div>
      ) : compras.length === 0 ? (
        <Alert variant="info" className="text-center">
          Aún no has realizado ninguna compra.
        </Alert>
      ) : (
        <Card className="shadow-lg p-4 rounded-4 historial-card">
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Fecha</th>
                <th>Productos</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((compra) => (
                <tr key={compra.id}>
                  <td>{compra.id}</td>
                  <td>{compra.fecha}</td>
                  <td>{compra.productos.join(", ")}</td>
                  <td>${compra.total.toLocaleString()}</td>
                  <td>
                    <span
                      className={`estado ${
                        compra.estado === "Entregado"
                          ? "estado-entregado"
                          : "estado-envio"
                      }`}
                    >
                      {compra.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </Container>
  );
};

export default HistorialComprasPage;
