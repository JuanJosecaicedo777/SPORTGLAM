import React from "react";
import { Container, Row, Col, Card, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// 🔹 Imágenes del banner (guárdalas en /src/assets o /public/IMG)
import F50 from "../assets/F50.webp";
import Zapatos from "../assets/Zapatos.webp";
import Banner from "../assets/BANNER.webp";


// 🔹 Imágenes de productos
import camisetaImg from "../assets/nacional.webp";
import zapatillasImg from "../assets/adidas mujer.avif";
import rolexImg from "../assets/rolex.webp";

// 🔹 Productos destacados en array (más escalable)
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
      {/* 🔹 Encabezado */}
      <header className="store-header text-center py-3">
        <h1 className="brand-title">SportGlam</h1>
        <p className="brand-subtitle">Tu tienda de confianza</p>
      </header>

      {/* 🔹 Barra búsqueda + categorías */}
      <div className="top-bar shadow-sm py-2 px-3 d-flex align-items-center justify-content-between">
        {/* Búsqueda */}
        <Form className="d-flex search-bar">
          <FormControl
            type="search"
            placeholder="Buscar productos..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>

        {/* Categorías */}
        <div className="categories d-flex">
          <a href="#hombre">HOMBRE</a>
          <a href="#mujer">MUJER</a>
          <a href="#marcas">MARCAS</a>
          <a href="#deportes">DEPORTES</a>
          <a href="#salir">SALIR</a>
        </div>
      </div>

      {/* 🔹 Banner estilo SportLine */}
      <Container fluid className="mb-5 mt-3">
        <Row>
          <Col md={8}>
            <div className="position-relative">
              <img src={F50} alt="Banner principal" className="img-fluid w-100 rounded" />
              <Button
                variant="dark"
                className="position-absolute bottom-0 start-0 m-3"
              >
                Ver más
              </Button>
            </div>
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <div className="position-relative">
                  <img src={Zapatos} alt="Imagen secundaria" className="img-fluid mb-3 rounded" />
                  <Button
                    variant="dark"
                    className="position-absolute bottom-0 start-0 m-2"
                  >
                    Ver colección
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="position-relative">
                  <img src={Banner} alt="Imagen secundaria 2" className="img-fluid rounded" />
                  <Button
                    variant="dark"
                    className="position-absolute bottom-0 start-0 m-2"
                  >
                    Ver más
                  </Button>


                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* 🔹 Productos Destacados */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="product-card shadow-sm">
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

      {/* 🔹 Footer */}
      <footer className="store-footer text-center mt-4 py-3">
        <p>SportGlam 2025</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
