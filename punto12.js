function calcularCircunferenciaCirculo(radio) {
    return 2 * Math.PI * radio;
}


let radio = 3;
let circunferencia = calcularCircunferenciaCirculo(radio);
console.log("La circunferencia del círculo con radio", radio, "es:", circunferencia.toFixed(2));
