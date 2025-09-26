// src/pages/DashboardPage/DashboardPage.js
import React, { useState, useContext } from "react";
import { Container, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardPage.css";

// 🔹 Íconos
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars } from "react-icons/fa";

// 🔹 Imágenes de productos destacados
import tenisImg from "../../assets/adidas-campus.webp";
import relojImg from "../../assets/reloj-invicta.webp";
import camisetaImg from "../../assets/camiseta-adidas-hombre.webp";

// 🔹 Imágenes para el carrusel
import bannerZapatillasAzules from "../../assets/adidas-azules.jpg";
import bannerPromocion from "../../assets/rolex-oyster.webp";
import bannerNuevoProducto from "../../assets/nike-air.jpg";

// 🔹 Importar contexto del carrito
import { CartContext } from "../../contexts/CartContext";

// 🔹 Productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Tenis Adidas Campus",
    image: tenisImg,
    price: 120000,
    description: "Tenis clásicos edición 2025.",
  },
  {
    id: 2,
    name: "Reloj Invicta",
    image: relojImg,
    price: 230000,
    description: "Reloj de lujo para hombre Invicta Pro.",
  },
  {
    id: 3,
    name: "Camiseta deportiva Adidas",
    image: camisetaImg,
    price: 185000,
    description: "Camiseta Own the Run 2025.",
  },
];

// 🔹 Colores para el carrusel
const carouselColors = ["#6489baff", "#afac86ff", "#993425"];

const DashboardPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(carouselColors[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🔹 Funciones del carrito desde contexto
  const { addToCart } = useContext(CartContext);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleSlideSelect = (selectedIndex) => {
    setBackgroundColor(carouselColors[selectedIndex]);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // 🔹 Función para agregar producto al carrito con formato correcto
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      nombre: product.name,
      precio: product.price,
      img: product.image,
    });
  };

  return (
    <div className="dashboard-container">
      {/* ENCABEZADO */}
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
          <button className="icon-link-new" onClick={() => handleNavigate("/login")}>
            <FaUserCircle />
          </button>
          <button className="icon-link-new" onClick={() => handleNavigate("/cart")}>
            <FaShoppingCart />
          </button>
          <button className="icon-link-new menu-toggle-btn" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        {/* MENÚ DESPLEGABLE */}
        {menuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li onClick={() => handleNavigate("/productos")}>Productos</li>
              <li onClick={() => handleNavigate("/categorias")}>Categorías</li>
              <li onClick={() => handleNavigate("/contacto")}>Contacto</li>
              <li onClick={() => handleNavigate("/about")}>Sobre Nosotros</li>
            </ul>
          </div>
        )}
      </header>

      {/* CARRUSEL */}
      <Container
        fluid
        className="carousel-container-wrapper"
        style={{ backgroundColor, transition: "background-color 0.5s ease" }}
      >
        <Carousel className="carousel-custom" onSelect={handleSlideSelect} interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerZapatillasAzules}
              alt="Zapatillas Adidas Azules"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerPromocion}
              alt="Promoción Especial"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={bannerNuevoProducto}
              alt="Lanzamiento"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* PRODUCTOS DESTACADOS */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <Card
                className="product-card shadow-sm"
                onClick={() => handleSelectProduct(product)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title className="product-title-new">{product.name}</Card.Title>
                  <p className="price-new">${product.price.toLocaleString()}</p>
                  <Button
                    variant="success"
                    className="add-to-cart-btn-new"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* MODAL PRODUCTO */}
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
            <h5>
              <strong>${selectedProduct.price.toLocaleString()}</strong>
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button
              variant="success"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Agregar al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* FOOTER */}
      <footer className="store-footer text-center mt-4 py-3">
        <p>SportGlam</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
