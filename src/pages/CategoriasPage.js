function CategoriasPage() {
  const categorias = ["Ropa", "Calzado", "Accesorios", "Relojes"];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#1f1f1f" }}>Categorías</h1>
      <ul style={{ listStyle: "square", paddingLeft: "20px" }}>
        {categorias.map((c, i) => (
          <li key={i} style={{ margin: "8px 0" }}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriasPage;
