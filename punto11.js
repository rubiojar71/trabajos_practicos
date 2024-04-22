function calcularSuperficieCuadrado(longitudLado) {
    return longitudLado * longitudLado;
}

let longitud = 5;
let superficie = calcularSuperficieCuadrado(longitud);
console.log("La superficie del cuadrado con lado", longitud, "es:", superficie);
