// Obtener el elemento donde se muestra el HEX
const hexText = document.getElementById("hex");

// Función para generar color HEX aleatorio
function generarColor() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Evento click en toda la pantalla
document.body.addEventListener("click", () => {
  const nuevoColor = generarColor();

  document.body.style.backgroundColor = nuevoColor;
  hexText.textContent = nuevoColor;
});