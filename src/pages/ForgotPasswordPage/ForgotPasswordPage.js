import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./ForgotPasswordPage.css";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      Swal.fire("Correo inválido", "Por favor ingresa un correo válido.", "warning");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire(
        "¡Correo enviado!",
        "Revisa tu bandeja de entrada o spam para restablecer tu contraseña.",
        "success"
      );
      setEmail("");
    } catch (error) {
      let errorMsg = "No se pudo enviar el correo.";
      if (error.code === "auth/user-not-found") errorMsg = "No existe una cuenta con ese correo.";
      Swal.fire("Error", errorMsg, "error");
    }
    setLoading(false);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="title">¿Tienes problemas para entrar?</h2>
        <p className="subtitle">
          Introduce tu correo electrónico y te enviaremos un enlace para volver a entrar en tu cuenta.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar enlace de acceso"}
          </button>
        </form>

        <hr className="divider" />

        <Link to="/register" className="link">
          Crear cuenta nueva
        </Link>

        <button className="secondary-btn">
          <Link to="/" className="link-btn">Volver al inicio de sesión</Link>
        </button>
      </div>

      <footer className="footer">© SportGlam 2025</footer>
    </div>
  );
}

export default ForgotPasswordPage;
