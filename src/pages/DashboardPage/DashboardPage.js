import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// 🔹 Imágenes de productos destacados
import camisetaImg from "../assets/nacional.webp";
import zapatillasImg from "../assets/adidas mujer.avif";
import rolexImg from "../assets/rolex.webp";

// 🔹 Productos destacados 
const featuredProducts = [
  {
    id: 1,
    name: "Camiseta de fútbol Nacional",
    image: camisetaImg,
    price: 120000,
    description: "Camiseta oficial del Atlético Nacional, edición 2025."
  },
  {
    id: 2,
    name: "Zapatos Adidas Mujer",
    image: zapatillasImg,
    price: 230000,
    description: "Zapatillas Adidas originales, cómodas y resistentes."
  },
  {
    id: 3,
    name: "Reloj Rolex Caballero",
    image: rolexImg,
    price: 185000,
    description: "Reloj de lujo Rolex, edición exclusiva para caballeros."
  },
];

const DashboardPage = ({ agregarCarrito }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="dashboard-container">
      {/* 🔹 Encabezado */}
      <header className="store-header text-center py-3">
        <h1 className="brand-title">SportGlam</h1>
        <p className="brand-subtitle">Tu tienda de confianza</p>
      </header>

      {/* 🔹 Barra búsqueda + categorías */}
      <div className="top-bar shadow-sm py-2 px-3 d-flex align-items-center justify-content-between">
        <Form className="d-flex search-bar">
          <input
            type="search"
            placeholder="Buscar productos.."
            className="form-control me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>

        <div className="categories d-flex">
          <a href="#hombre">HOMBRE</a>
          <a href="#mujer">MUJER</a>
          <a href="#marcas">MARCAS</a>
          <a href="#deportes">DEPORTES</a>
          <a href="#salir">SALIR</a>
        </div>
      </div>

      {/* 🔹 Productos Destacados */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <Card 
                className={`product-card shadow-sm ${selectedProduct?.id === product.id ? "border-success" : ""}`}
                onClick={() => handleSelectProduct(product)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p className="price">${product.price.toLocaleString()}</p>
                  <div className="d-flex flex-column gap-2">
                    <Button
                      variant="success"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        agregarCarrito(product);
                      }}
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🔹 Modal para detalles */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="img-fluid mb-3 rounded"
            />
            <p>{selectedProduct.description}</p>
            <h5><strong>${selectedProduct.price.toLocaleString()}</strong></h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button variant="success" onClick={() => agregarCarrito(selectedProduct)}>
              Agregar al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* 🔹 pie de pagina */}
      <footer className="store-footer text-center mt-4 py-3">
        <p>SportGlam</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
