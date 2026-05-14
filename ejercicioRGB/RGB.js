const input1 = document.getElementById('rojo');
const input2 = document.getElementById('verde');
const input3 = document.getElementById('azul');

input1.addEventListener('input', actualizarColor);
input2.addEventListener('input', actualizarColor);
input3.addEventListener('input', actualizarColor);

function actualizarColor() {
    const rojo = parseInt(input1.value);
    const verde = parseInt(input2.value);
    const azul = parseInt(input3.value);

    const color = `rgb(${rojo}, ${verde}, ${azul})`;

    document.body.style.backgroundColor = color;




    document.getElementById('color-rojo').textContent = rojo;
    document.getElementById('color-verde').textContent = verde;
    document.getElementById('color-azul').textContent = azul;

}
