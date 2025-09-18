import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactoPage.css";

function ContactoPage() {
  const navigate = useNavigate();

  return (
    <div className="contacto-container">
      <div className="contacto-card">
        <h1>Contacto</h1>
        <p>Si tienes dudas, escríbenos:</p>
        <form className="contacto-form">
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu correo" />
          <textarea placeholder="Tu mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Atrás
        </button>
      </div>
    </div>
  );
}

export default ContactoPage;
