
const hexText = document.getElementById("hex");


function generarColor() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}


document.body.addEventListener("click", () => {
  const nuevoColor = generarColor();

  document.body.style.backgroundColor = nuevoColor;
  hexText.textContent = nuevoColor;
});