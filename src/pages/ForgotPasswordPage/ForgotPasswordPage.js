import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire(
        "Correo enviado",
        "Revisa tu bandeja de entrada para restablecer tu contraseña.",
        "success"
      );
      setEmail("");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo enviar el correo de recuperación.", "error");
    }

    setLoading(false);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: "500px", width: "100%", padding: "2rem" }}>
        <h2 className="mb-4 text-center">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar enlace de recuperación"}
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
