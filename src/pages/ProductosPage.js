// src/pages/ProductosPage.js
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import "./ProductosPage.css";

// 🔹 Imágenes
import camisaImg from "../assets/camiseta-puma-caballero.avif";
import pantalonImg from "../assets/pantalon-adidas.webp";
import tenisImg from "../assets/zapatos-puma.webp";
import botasImg from "../assets/zapatillas-nike run.webp";
import gorraImg from "../assets/gafas-mujer.webp";
import gafasImg from "../assets/gorra-hombre.webp";
import rolexImg from "../assets/rolex-caballero.jpg";
import casioImg from "../assets/reloj-caballero-casio.webp";

// Todos los productos
const allProducts = {
  ropa: [
    { id: 1, nombre: "Camiseta Puma Caballero", precio: 80000, img: camisaImg },
    { id: 2, nombre: "Pantalón Adidas", precio: 120000, img: pantalonImg },
  ],
  calzado: [
    { id: 3, nombre: "Tenis Puma", precio: 300000, img: tenisImg },
    { id: 4, nombre: "Zapatos Run Nike", precio: 350000, img: botasImg },
  ],
  accesorios: [
    { id: 5, nombre: "Gafas Mujer", precio: 60000, img: gorraImg },
    { id: 6, nombre: "Gorra Nike", precio: 90000, img: gafasImg },
  ],
  relojes: [
    { id: 7, nombre: "Rolex", precio: 350000, img: rolexImg },
    { id: 8, nombre: "Casio", precio: 250000, img: casioImg },
  ],
};

function ProductosPage() {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Si no hay categoría, mostrar todos
  const productos = categoria ? allProducts[categoria] : Object.values(allProducts).flat();

  return (
    <Container className="productos-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Regresar</button>
      <h1 className="productos-title">
        {categoria ? `Productos de ${categoria}` : "Todos los productos"}
      </h1>
      <Row>
        {productos?.map((p) => (
          <Col key={p.id} md={4} className="mb-4">
            <Card className="producto-card">
              <Card.Img variant="top" src={p.img} className="producto-img" />
              <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>${p.precio.toLocaleString()}</Card.Text>
                <Button variant="dark" onClick={() => addToCart(p)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductosPage;
