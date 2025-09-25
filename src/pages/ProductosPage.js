// src/pages/ProductosPage.js
import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductosPage.css";

// 🔹 Importar imágenes desde assets
import tenisImg from "../assets/adidas-campus.webp";
import relojImg from "../assets/rolex-hd.avif";
import camisetaImg from "../assets/camiseta-nike-hombre.webp";

function ProductosPage() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 🔹 Productos con imágenes importadas
  const productos = [
    { id: 1, name: "Tenis Adidas Campus", price: 120000, img: tenisImg },
    { id: 2, name: "Reloj Invicta", price: 230000, img: relojImg },
    { id: 3, name: "Camiseta deportiva Adidas", price: 185000, img: camisetaImg },
  ];

  const handleAddToCart = (producto) => {
    addToCart(producto);
    navigate("/cart");
  };

  return (
    <Container className="my-5">
      {/* 🔹 Botón Regresar */}
      <Button className="back-button mb-3" onClick={() => navigate(-1)}>
        ⬅ Regresar
      </Button>

      <h1 className="text-center mb-4 productos-title">🛍️ Nuestros Productos</h1>
      <Row>
        {productos.map((producto) => (
          <Col md={4} sm={6} xs={12} key={producto.id} className="mb-4">
            <Card className="producto-card h-100 text-center">
              <Card.Img
                variant="top"
                src={producto.img}
                alt={producto.name}
                className="producto-img"
              />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text className="precio">
                  ${producto.price.toLocaleString()}
                </Card.Text>
                <Button
                  className="btn-agregar"
                  onClick={() => handleAddToCart(producto)}
                >
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
