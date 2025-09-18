// src/pages/CheckoutPage.js
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
    const { cart, total } = useContext(CartContext);
    const navigate = useNavigate();

    //  Estados para selección
    const [selectedEnvio, setSelectedEnvio] = useState(null);
    const [selectedPago, setSelectedPago] = useState(null);

    // Opciones de envío
    const envios = [
        { id: "servientrega", nombre: "Servientrega", logo: require("../assets/servientrega.jpg") },
        { id: "interrapidisimo", nombre: "Interrapidísimo", logo: require("../assets/inter-rapidisimo.png") },
        { id: "coordinadora", nombre: "Coordinadora", logo: require("../assets/coordinadora.png") },
        { id: "envia", nombre: "Envia", logo: require("../assets/envia.jpg") },
    ];

    // Opciones de pago
    const pagos = [
        { id: "efecty", nombre: "Efecty", logo: require("../assets/efecty.png") },
        { id: "pse", nombre: "PSE", logo: require("../assets/pse.png") },
        { id: "visa", nombre: "Visa", logo: require("../assets/visa.png") },
        { id: "bancolombia", nombre: "Bancolombia", logo: require("../assets/bancolombia.png") },
    ];

    // Confirmar y redirigir
    const handleConfirm = () => {
        if (!selectedEnvio || !selectedPago) {
            alert("⚠️ Debes seleccionar un método de envío y un método de pago.");
            return;
        }

        navigate("/success", {
            state: {
                envio: selectedEnvio,
                pago: selectedPago,
                productos: cart,
                total,
            },
        });
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">💳 Métodos de Pago</h1>

            <div className="d-flex flex-column align-items-center">
                {/* Resumen del pedido */}
                <Card className="shadow mb-4 p-4 checkout-card">
                    <h4 className="text-center">Tu Pedido</h4>
                    <p>{cart.length} producto(s)</p>
                    <p>Subtotal: ${total.toLocaleString()}</p>
                    <p>Entrega: Gratis</p>
                    <h5>Total: ${total.toLocaleString()}</h5>
                </Card>

                {/* Métodos de envío */}
                <Card className="shadow mb-4 p-4 checkout-card">
                    <h5 className="mb-3">🚚 Métodos de Envío</h5>
                    <div className="checkout-logos">
                        {envios.map((envio) => (
                            <div
                                key={envio.id}
                                className={`checkout-option ${selectedEnvio === envio.nombre ? "selected" : ""}`}
                                onClick={() => setSelectedEnvio(envio.nombre)}
                            >
                                <img src={envio.logo} alt={envio.nombre} />
                                <p>{envio.nombre}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Métodos de pago */}
                <Card className="shadow mb-4 p-4 checkout-card">
                    <h5 className="mb-3">💵 Métodos de Pago</h5>
                    <div className="checkout-logos">
                        {pagos.map((pago) => (
                            <div
                                key={pago.id}
                                className={`checkout-option ${selectedPago === pago.nombre ? "selected" : ""}`}
                                onClick={() => setSelectedPago(pago.nombre)}
                            >
                                <img src={pago.logo} alt={pago.nombre} />
                                <p>{pago.nombre}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Botón confirmar */}
                <Button variant="success" size="lg" onClick={handleConfirm}>
                    Confirmar Pago
                </Button>

                {/* Botón volver */}
                <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => navigate("/cart")}
                >
                    ⬅️ Volver al carrito
                </Button>
            </div>
        </Container>
    );
}

export default CheckoutPage;
