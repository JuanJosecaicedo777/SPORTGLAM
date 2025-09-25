// src/pages/LoginPage/LoginPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Swal from "sweetalert2";

// 🔹 Firebase
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  // 🔹 Login manual con usuario demo
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

  // 🔹 Login con Google
  const handleGoogleLogin = async () => {
    if (loading) return; 
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      Swal.fire("Bienvenido", `Hola ${user.displayName}`, "success");
      navigate("/dashboard"); 
    } catch (err) {
      console.error("Error en Google Login:", err);
      Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        
        {/* 🔹 Título estilo logo */}
        <h2 className="login-title">SPORTGLAM</h2>

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
          {/* 🔹 Botón Google */}
          <button
            type="button"
            className="btn-social google"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <i className="fab fa-google"></i> Google
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
