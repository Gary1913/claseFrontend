let valor = 0;

function aumentar() {
    if (valor < 10) {
        valor++;
        actualizarPantalla();
    }
}

function disminuir() {
    if (valor > 0) {
        valor--;
        actualizarPantalla();
                }
}

function actualizarPantalla() {
    let contador = document.getElementById("contador");
    let btnAumentar = document.getElementById("aumentar");
    let btnDisminuir = document.getElementById("disminuir");

    contador.textContent = valor;

    // Color del número
    if (valor === 0 || valor === 10) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }

    
}