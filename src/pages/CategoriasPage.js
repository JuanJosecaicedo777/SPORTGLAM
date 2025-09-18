import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriasPage.css";

// Datos de ejemplo de categorías con imagen y descripción
const categorias = [
  {
    nombre: "Ropa",
    descripcion: "Prendas para todos los estilos y ocasiones.",
    img: "/IMG/ropa.jpg",
  },
  {
    nombre: "Calzado",
    descripcion: "Zapatos, zapatillas y más para tu look.",
    img: "/IMG/calzado.jpg",
  },
  {
    nombre: "Accesorios",
    descripcion: "Bolsos, gafas, sombreros y más.",
    img: "/IMG/accesorios.jpg",
  },
  {
    nombre: "Relojes",
    descripcion: "Relojes elegantes y deportivos.",
    img: "/IMG/relojes.jpg",
  },
];

function CategoriasPage() {
  const navigate = useNavigate();

  return (
    <div className="categorias-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Regresar
      </button>
      <h1>Categorías</h1>
      <div className="categorias-grid">
        {categorias.map((c, i) => (
          <div key={i} className="categoria-card">
            <img src={c.img} alt={c.nombre} />
            <h2>{c.nombre}</h2>
            <p>{c.descripcion}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriasPage;
