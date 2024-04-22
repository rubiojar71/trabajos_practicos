function esBisiesto(anio) {
    // Un año es bisiesto si es divisible entre 4
    // Pero no es bisiesto si es divisible entre 100, a menos que también sea divisible entre 400
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function cantidadDiasMes(mes, anio) {
    // Array con la cantidad de días por mes (suponiendo que no es un año bisiesto)
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verificar si el número de mes está dentro del rango válido (1 a 12)
    if (mes >= 1 && mes <= 12) {
        // Si es febrero y el año es bisiesto, entonces tiene 29 días
        if (mes === 2 && esBisiesto(anio)) {
            return 29;
        } else {
            return diasPorMes[mes - 1]; // Restamos 1 porque los índices del array comienzan desde 0
        }
    } else {
        return "Número de mes inválido";
    }
}

// Ejemplo de uso:
let dia = 15;
let mes = 2; // Por ejemplo, febrero
let anio = 2024; // Ejemplo de año bisiesto
let cantidadDias = cantidadDiasMes(mes, anio);
console.log("El mes", mes, "del año", anio, "tiene", cantidadDias, "días.");
