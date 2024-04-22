function siguiente(numero) {
    return numero + 1;
}

function doble(numero) {
    return numero * 2;
}

function cuadrado(numero) {
    return numero * numero;
}

function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    let cuadradoDelNumero = cuadrado(numero);
    let dobleDelCuadrado = doble(cuadradoDelNumero);
    let siguienteAlDobleDelCuadrado = siguiente(dobleDelCuadrado);
    console.log("El valor siguiente al doble del cuadrado de", numero, "es:", siguienteAlDobleDelCuadrado);
}

imprimirElDobleDelSiguienteAlCuadrado(2);
