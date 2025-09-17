function ContactoPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#1f1f1f" }}>Contacto</h1>
      <p>Si tienes dudas, escríbenos:</p>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <input type="text" placeholder="Tu nombre" style={{ margin: "8px 0", padding: "8px" }} />
        <input type="email" placeholder="Tu correo" style={{ margin: "8px 0", padding: "8px" }} />
        <textarea placeholder="Tu mensaje" style={{ margin: "8px 0", padding: "8px" }}></textarea>
        <button style={{ background: "#1f1f1f", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactoPage;
