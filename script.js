var cant = 50;

function contar () {
    cant--;
    actualizar(cant);
}

function actualizar (val) {
    document.getElementById("cantidad").innerHTML = val;
}