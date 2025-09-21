// src/components/InvoiceGenerator.js
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generarFacturaPDF = (orderData) => {
  const factura = document.createElement("div");
  factura.style.width = "600px";
  factura.style.padding = "20px";
  factura.style.fontFamily = "Arial, sans-serif";
  factura.style.background = "#fff";
  factura.innerHTML = `
    <h2 style="text-align:center; color:#2c3e50;">Factura Virtual</h2>
    <hr/>
    <p><b>Cliente:</b> ${orderData.cliente}</p>
    <p><b>Método de Envío:</b> ${orderData.metodoEnvio}</p>
    <p><b>Método de Pago:</b> ${orderData.metodoPago}</p>
    <p><b>Producto:</b> ${orderData.producto}</p>
    <p><b>Total:</b> $${orderData.total}</p>
    <hr/>
    <p style="text-align:center; font-size:12px;">Gracias por tu compra en SportGlam</p>
  `;

  document.body.appendChild(factura);

  html2canvas(factura).then((canvas) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Factura_SportGlam.pdf");
    document.body.removeChild(factura);
  });
};
