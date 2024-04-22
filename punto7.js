function siguiente(numero) {
    return numero + 1;
}

function doble(numero) {
    return numero * 2;
}

function cuadrado(numero) {
    return numero * numero;
}

function imprimirValores(numero) {
    console.log("Valor siguiente:", siguiente(numero));
    console.log("Doble:", doble(numero));
    console.log("Cuadrado:", cuadrado(numero));
}

imprimirValores(5);
