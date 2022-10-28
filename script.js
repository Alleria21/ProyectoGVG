var cant = 0;

var oferta1 = 60;
var oferta2 = 25;
var oferta3 = 100;
var oferta4 = 30;
var oferta5 = 15;
var oferta6 = 20;

document.getElementById("oferta1").innerHTML = oferta1;
document.getElementById("oferta2").innerHTML = oferta2;
document.getElementById("oferta3").innerHTML = oferta3;
document.getElementById("oferta4").innerHTML = oferta4;
document.getElementById("oferta5").innerHTML = oferta5;
document.getElementById("oferta6").innerHTML = oferta6;


function contar () {
    cant = oferta1
    cant--;
    actualizar(cant);
}

function actualizar (val) {
    document.getElementById("oferta1").innerHTML = val;
    document.getElementById("oferta1").val;
}