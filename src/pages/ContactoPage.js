import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactoPage.css";

function ContactoPage() {
  const navigate = useNavigate();

  return (
    <div className="contacto-container">
      <div className="contacto-card">
        <h1 className="contacto-title">Contáctanos</h1>
        <p className="contacto-subtitle">
          Si tienes dudas o sugerencias, completa el formulario:
        </p>
        <form className="contacto-form">
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu correo" />
          <textarea placeholder="Tu mensaje"></textarea>
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </form>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Atrás
        </button>
      </div>
    </div>
  );
}

export default ContactoPage;
