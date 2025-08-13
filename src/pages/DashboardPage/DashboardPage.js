import React from "react";
import { Container, Row, Col, Card, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// Imágenes de productos
import camisetaImg from "../assets/nacional.webp";
import zapatillasImg from "../assets/adidas mujer.avif";
import rolexImg from "../assets/rolex.webp";

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta de fútbol Nacional",
    image: camisetaImg,
    price: "$120.000",
  },
  {
    id: 2,
    name: "Zapatos Adidas Mujer",
    image: zapatillasImg,
    price: "$230.000",
  },
  {
    id: 3,
    name: "Reloj Rolex Caballero",
    image: rolexImg,
    price: "$185.000",
  },
];

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Encabezado */}
      <header className="store-header text-center py-3">
        <h1 className="brand-title">SportGlam</h1>
        <p className="brand-subtitle">Tu tienda de confianza</p>
      </header>

      {/* Barra búsqueda + categorías */}
      <div className="top-bar shadow-sm py-2 px-3 d-flex align-items-center justify-content-between">
        {/* Búsqueda a la izquierda */}
        <Form className="d-flex search-bar">
          <FormControl
            type="search"
            placeholder="Buscar productos..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>

        {/* Categorías a la derecha */}
        <div className="categories d-flex">
          <a href="#hombre">HOMBRE</a>
          <a href="#mujer">MUJER</a>
          <a href="#marcas">MARCAS</a>
          <a href="#deportes">DEPORTES</a>
          <a href="#salir" className="">SALIR</a>
        </div>
      </div>

      {/* Productos */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="price">{product.price}</Card.Text>
                  <Button variant="success" className="w-100">
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="store-footer">
        <p>SportGlam 2025</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
