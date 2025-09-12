import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Swal from "sweetalert2";

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Login manual con usuario fijo
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (emailOrPhone === "juan@gmail.com" && password === "12345") {
      Swal.fire("Bienvenido", "Inicio de sesión exitoso", "success");
      navigate("/dashboard");
    } else {
      setError("Correo/contraseña inválidos.");
      Swal.fire("Error", "Correo/contraseña inválidos.", "error");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        <h2 className="login-title">SportGlam</h2>
        {error && <div className="alert-error">{error}</div>}

        <input
          type="text"
          placeholder="Teléfono o correo electrónico"
          className="form-input"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>

        <p className="or">O continúa con:</p>
        <div className="social-buttons">
          <button
            type="button"
            className="btn-social google"
            onClick={() =>
              Swal.fire("Aviso", "Login con Google deshabilitado en modo demo", "info")
            }
          >
            <i className="fab fa-google"></i> Google
          </button>
          <button
            type="button"
            className="btn-social facebook"
            onClick={() =>
              Swal.fire("Aviso", "Login con Facebook deshabilitado en modo demo", "info")
            }
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </button>
        </div>

        <Link to="/forgot" className="forgot">
          ¿Has olvidado tu contraseña?
        </Link>

        <div className="register-box">
          <Link to="/register" className="register">
            ¿No tienes una cuenta? ¡Regístrate!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
