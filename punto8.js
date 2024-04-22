function siguiente(numero) {
    return numero + 1;
}

function doble(numero) {
    return numero * 2;
}

function imprimirElDobleDelSiguiente(numero) {
    let siguienteNumero = siguiente(numero);
    let dobleDelSiguiente = doble(siguienteNumero);
    console.log("El doble del valor siguiente a", numero, "es:", dobleDelSiguiente);
}

imprimirElDobleDelSiguiente(3);
