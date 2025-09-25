import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriasPage.css";

// Importar imágenes desde assets
import ropaImg from "../assets/saco-hombre.avif";
import calzadoImg from "../assets/zapatillas nike-hombre.webp";
import accesoriosImg from "../assets/gorra-mujer.jpg";
import relojesImg from "../assets/rolex.webp";

// Datos de categorías con import de imágenes
const categorias = [
  {
    nombre: "Ropa",
    descripcion: "Prendas para todos los estilos y ocasiones.",
    img: ropaImg,
  },
  {
    nombre: "Calzado",
    descripcion: "Zapatos, hombre y mujer para tu look.",
    img: calzadoImg,
  },
  {
    nombre: "Accesorios",
    descripcion: "Bolsos, gafas, gorras y más.",
    img: accesoriosImg,
  },
  {
    nombre: "Relojes",
    descripcion: "Relojes elegantes y deportivos.",
    img: relojesImg,
  },
];

function CategoriasPage() {
  const navigate = useNavigate();

  return (
    <div className="categorias-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Regresar
      </button>
      <h1 className="categorias-title">Categorías</h1>
      <div className="categorias-grid">
        {categorias.map((c, i) => (
          <div key={i} className="categoria-card">
            <img src={c.img} alt={c.nombre} className="categoria-img" />
            <h2>{c.nombre}</h2>
            <p>{c.descripcion}</p>
            <button className="btn-ver">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriasPage;
