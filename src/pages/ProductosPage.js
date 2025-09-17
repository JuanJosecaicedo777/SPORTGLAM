function ProductosPage() {
  const productos = [
    { id: 1, nombre: "Camiseta deportiva", precio: 25 },
    { id: 2, nombre: "Zapatillas running", precio: 80 },
    { id: 3, nombre: "Gorra", precio: 15 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#1f1f1f" }}>Productos</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((p) => (
          <li key={p.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
            {p.nombre} - <b>${p.precio}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosPage;
