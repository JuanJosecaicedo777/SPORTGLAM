import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 🔙 Regresar a la página anterior
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Formulario de Registro</h2>

        <form className="register-form">
          <div className="row">
            <input type="text" placeholder="Nombres" />
            <input type="text" placeholder="Apellidos" />
          </div>
          <div className="row">
            <input type="date" placeholder="Fecha de nacimiento" />
            <input type="email" placeholder="Correo electrónico" />
          </div>
          <div className="row">
            <input type="text" placeholder="Teléfono" />
            <select>
              <option value="">Seleccione un país</option>
              <option value="CO">Colombia</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
            </select>
          </div>
          <div className="row">
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Repetir contraseña" />
          </div>
          <div className="row">
            <select>
              <option value="">Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">
            Enviar
          </button>

          <button type="button" className="btn-back" onClick={handleBack}>
            ← Volver
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
