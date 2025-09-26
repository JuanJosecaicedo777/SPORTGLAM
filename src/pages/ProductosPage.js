// src/pages/ProductosPage.js
import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // 🔹 Importar SweetAlert2
import "./ProductosPage.css";

// 🔹 Importar imágenes desde assets
import tenisImg from "../assets/adidas-campus.webp";
import relojImg from "../assets/rolex-hd.avif";
import camisetaImg from "../assets/camiseta-nike-hombre.webp";
import pantalonImg from "../assets/pantalon-adidas.webp";
import gorraImg from "../assets/gorra-hombre.webp";
import bolsoImg from "../assets/bolso-adidas.avif";
import audifonosImg from "../assets/reloj-casio.jpg";
import chaquetaImg from "../assets/chaqueta-mujer-puma.avif";

function ProductosPage() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 🔹 Productos con imágenes importadas
  const productos = [
    { id: 1, name: "Tenis Adidas Campus", price: 120000, img: tenisImg },
    { id: 2, name: "Reloj Rolex", price: 230000, img: relojImg },
    { id: 3, name: "Camiseta deportiva Nike", price: 185000, img: camisetaImg },
    { id: 4, name: "Pantalón Adidas", price: 150000, img: pantalonImg },
    { id: 5, name: "Gorra Nike Hombre", price: 85000, img: gorraImg },
    { id: 6, name: "Bolso Adidas", price: 110000, img: bolsoImg },
    { id: 7, name: "Reloj Casio", price: 320000, img: audifonosImg },
    { id: 8, name: "Chaqueta Puma Mujer", price: 280000, img: chaquetaImg },
  ];

  const handleAddToCart = (producto) => {
    addToCart(producto);

    // 🔹 Popup con opciones
    Swal.fire({
      title: "✅ Producto agregado",
      text: `"${producto.name}" se agregó al carrito`,
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Ir al carrito 🛒",
      cancelButtonText: "Seguir comprando",
      confirmButtonColor: "#6c63ff",
      cancelButtonColor: "#aaa",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart"); // 🔹 Va al carrito
      }
    });
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
