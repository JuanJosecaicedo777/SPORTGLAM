import React, { useState } from "react";
import { Container, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// 🔹 Importa los íconos necesarios para el encabezado
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars } from 'react-icons/fa';

// 🔹 Imágenes de productos destacados
import TenisImg from "../assets/adidas-campus.webp";
import RelojImg from "../assets/reloj-invicta.webp";
import CamisetaImg from "../assets/Camiseta-adidas hombre.webp";

// 🔹 Importa las imágenes para el carrusel
import bannerZapatillasAzules from "../assets/adidas-azules.jpg"; 
import bannerPromocion from "../assets/rolex-oyster.webp"; 
import bannerNuevoProducto from "../assets/nike-air.jpg"; 


// 🔹 Productos destacados 
const featuredProducts = [
  {
    id: 1,
    name: "Tenis Adidas Campus",
    image: TenisImg,
    price: 120000,
    description: "Tenis clásicos edición 2025."
  },
  {
    id: 2,
    name: "Reloj Invicta",
    image: RelojImg,
    price: 230000,
    description: "Reloj de lujo para hombre invicta pro."
  },
  {
    id: 3,
    name: "Camiseta deportiva Adidas",
    image: CamisetaImg,
    price: 185000,
    description: "Camiseta Own the Run 2025."
  },
];

// 🔹 Colores para el carrusel, que corresponden a cada imagen
const carouselColors = ['#6489baff', '#afac86ff', '#993425']; 

const DashboardPage = ({ agregarCarrito }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(carouselColors[0]);
  const navigate = useNavigate();

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  // 🔹 Función para cambiar el color de fondo
  const handleSlideSelect = (selectedIndex) => {
    setBackgroundColor(carouselColors[selectedIndex]);
  };


  return (
    <div className="dashboard-container">
      {/* 🔹 ENCABEZADO MODERNO */}
      <header className="header-container-new">
        <div className="header-logo-new">
          <h1 className="brand-title-new">SportGlam</h1>
        </div>
        <div className="header-search-bar-new">
          <FaSearch className="search-icon-new" />
          <input
            type="search"
            placeholder="Buscar productos..."
            className="search-input-new"
          />
        </div>
        <div className="header-icons-new">
          <a href="/login" className="icon-link-new">
            <FaUserCircle />
          </a>
          <a href="/carrito" className="icon-link-new">
            <FaShoppingCart />
          </a>
          <button className="icon-link-new menu-toggle-btn">
            <FaBars />
          </button>
        </div>
      </header>

      {/* 🔹 CARRUSEL DE IMÁGENES */}
      <Container 
        fluid 
        className="carousel-container-wrapper" 
        style={{ backgroundColor, transition: 'background-color 0.5s ease' }}
      >
        <Carousel 
          className="carousel-custom" 
          onSelect={handleSlideSelect} 
          interval={3000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerZapatillasAzules}
              alt="Zapatillas Adidas Azules"
            />
            <Carousel.Caption className="carousel-caption-custom">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerPromocion}
              alt="Promoción Especial"
            />
            <Carousel.Caption className="carousel-caption-custom">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerNuevoProducto}
              alt="Lanzamiento"
            />
            <Carousel.Caption className="carousel-caption-custom">
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* 🔹 PRODUCTOS DESTACADOS ALINEADOS */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <Card
                className={`product-card shadow-sm ${selectedProduct?.id === product.id ? "border-success" : ""}`}
                onClick={() => handleSelectProduct(product)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title className="product-title-new">{product.name}</Card.Title>
                  <p className="price-new">${product.price.toLocaleString()}</p>
                  <div className="d-flex flex-column gap-2">
                    <Button
                      variant="success"
                      className="add-to-cart-btn-new"
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
            </div>
          ))}
        </div>
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