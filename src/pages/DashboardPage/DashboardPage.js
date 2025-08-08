import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';


const featuredProducts = [
  {
    id: 1,
    name: 'Balón de Fútbol ',
    image: '/IMG/ball.jpg',
    price: '$120.000',
  },
  {
    id: 2,
    name: 'Zapatillas Running',
    image: '/IMG/shoes.jpg',
    price: '$280.000',
  },
  {
    id: 3,
    name: 'Reloj Rolex',
    image: '/IMG/gloves.jpg',
    price: '$180.000',
  },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4 fw-bold">Bienvenido a SportGlam</h1>
          <p className="lead">Tu tienda deportiva de confianza. ¡Equípate con lo mejor!</p>
          <Button variant="warning" size="lg" className="mt-3">Ver Productos</Button>
        </div>
      </div>

      {/* Featured Products */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.price}</Card.Text>
                  <Button variant="primary" className="mt-auto">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
