import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// 🔹 Imágenes del banner
import F50 from "../assets/adidas-banner.avif";
import Zapatos from "../assets/Zapatos.webp";
import Banner from "../assets/BANNER.webp";

// 🔹 Imágenes Mujer/Hombre
import MujerImg from "../assets/BANNER-MUJER_2.webp"; 
import HombreImg from "../assets/BANNER-HOMBRE.webp"; 
import MujerZap1 from "../assets/nike-mujer.webp";
import MujerZap2 from "../assets/Camiseta-adidas mujer.webp";
import HombreZap1 from "../assets/Camiseta-adidas hombre.webp";
import HombreZap2 from "../assets/zapatillas-nike run.webp";

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
  },
  {
    id: 2,
    name: "Zapatos Adidas Mujer",
    image: zapatillasImg,
    price: 230000,
  },
  {
    id: 3,
    name: "Reloj Rolex Caballero",
    image: rolexImg,
    price: 185000,
  },
];

const DashboardPage = ({ agregarCarrito }) => {
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
          <input
            type="search"
            placeholder="Buscar productos.."
            className="form-control me-2"
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

      {/* 🔹 Banner */}
      <Container fluid className="mb-5 mt-3">
        <Row className="g-3">
          {/* Imagen grande */}
          <Col md={8}>
            <div className="position-relative h-100">
              <img src={F50} alt="Banner principal" className="img-fluid w-100 h-100 rounded object-fit-cover" />
              <Button variant="dark" className="position-absolute bottom-0 start-0 m-3">
                Ver más
              </Button>
            </div>
          </Col>

          {/* Dos imágenes a la derecha */}
          <Col md={4} className="d-flex flex-column gap-3">
            <div className="position-relative flex-fill">
              <img src={Zapatos} alt="Imagen secundaria" className="img-fluid w-100 h-100 rounded object-fit-cover" />
              <Button variant="dark" className="position-absolute bottom-0 start-0 m-2">
                Ver colección
              </Button>
            </div>
            <div className="position-relative flex-fill">
              <img src={Banner} alt="Imagen secundaria 2" className="img-fluid w-100 h-100 rounded object-fit-cover" />
              <Button variant="dark" className="position-absolute bottom-0 start-0 m-2">
                Ver más
              </Button>
            </div>
          </Col>
        </Row>
      </Container>


      {/* 🔹 Sección Mujer/Hombre */}
      <Container fluid className="categorias-container my-5">
        {/* Mujer */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center position-relative">
            <img src={MujerImg} alt="Mujer" className="img-fluid mujer-hombre-img" />
            <h1 className="categoria-texto">MUJER</h1>
            <Button variant="outline-dark" className="mt-3">VER MÁS</Button>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <Card className="producto-card">
                  <Card.Img variant="top" src={MujerZap1} />
                  <Card.Body>
                    <Card.Title>Zapatillas Nike Motiva Mujer</Card.Title>
                    <p><strong>$264.950</strong></p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="producto-card">
                  <Card.Img variant="top" src={MujerZap2} />
                  <Card.Body>
                    <Card.Title>Camiseta Deportiva Adidas</Card.Title>
                    <p><strong>$129.950</strong></p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>


        {/* Hombre */}
        <Row className="align-items-center">
          <Col md={6}>
            <Row>
              <Col md={6}>
                <Card className="producto-card">
                  <Card.Img variant="top" src={HombreZap1} />
                  <Card.Body>
                    <Card.Title>Camiseta Deportiva Adidas </Card.Title>
                    <p><strong>$139.950</strong></p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="producto-card">
                  <Card.Img variant="top" src={HombreZap2} />
                  <Card.Body>
                    <Card.Title>Nike Air Monarch IV Hombre</Card.Title>
                    <p><strong>$229.950</strong></p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="text-center position-relative">
            <img src={HombreImg} alt="Hombre" className="img-fluid mujer-hombre-img" />
            <h1 className="categoria-texto">HOMBRE</h1>
            <Button variant="outline-dark" className="mt-3">VER MÁS</Button>
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
                  <p className="price">
                    ${product.price.toLocaleString()}
                  </p>
                  <Button
                    variant="success"
                    className="w-100"
                    onClick={() => agregarCarrito(product)}
                  >
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🔹 pie de pagina */}
      <footer className="store-footer text-center mt-4 py-3">
        <p>SportGlam</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
