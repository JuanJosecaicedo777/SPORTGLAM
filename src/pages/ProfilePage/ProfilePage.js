// src/pages/ProfilePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Cargar datos guardados en localStorage
    const savedName = localStorage.getItem("profileName");
    const savedEmail = localStorage.getItem("profileEmail");
    const savedImage = localStorage.getItem("profileImage");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedImage) setProfileImage(savedImage);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Guardar datos en localStorage
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileEmail", email);
    if (profileImage) {
      localStorage.setItem("profileImage", profileImage);
    }
    navigate("/"); // Regresar al inicio
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Editar Perfil</h2>

        <div className="profile-photo-section">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Foto de perfil"
              className="profile-photo"
            />
          ) : (
            <div className="profile-placeholder">Sin foto</div>
          )}
          <label className="photo-upload-label">
            Cambiar foto
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="photo-input"
            />
          </label>
        </div>

        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="save-btn" onClick={handleSave}>
          Guardar cambios
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Regresar
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
