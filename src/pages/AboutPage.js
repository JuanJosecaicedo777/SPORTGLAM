import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-card">
        {/* 🔹 Botón Regresar */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Regresar
        </button>

        <h1>Sobre SportGlam</h1>
        <p>
          SportGlam es una tienda en línea que combina lo mejor del deporte y la moda.
          Nuestro objetivo es que luzcas bien mientras entrenas y en tu día a día.
        </p>
        <p>
          Ofrecemos productos de alta calidad, diseños exclusivos y experiencias de compra
          pensadas para amantes del estilo y el deporte.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
