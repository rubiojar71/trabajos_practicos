function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}


let radio = 4;
let area = calcularAreaCirculo(radio);
console.log("El área del círculo con radio", radio, "es:", area.toFixed(2));
