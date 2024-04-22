function esBisiesto(anio) {
    // Un año es bisiesto si es divisible entre 4
    // Pero no es bisiesto si es divisible entre 100, a menos que también sea divisible entre 400
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function diaAnterior(dia, mes, anio) {
    // Verificar si el número de mes está dentro del rango válido (1 a 12)
    if (mes >= 1 && mes <= 12) {
        // Verificar si el día es mayor que 1
        if (dia > 1) {
            // Si el día no es el primero del mes, simplemente restamos 1 al día
            return dia - 1;
        } else {
            // Si el día es el primero del mes, necesitamos verificar si es el primer mes del año
            // o si el mes anterior tiene 31 días
            if (mes === 1) {
                // Si es el primer mes del año, retrocedemos al último día del año anterior
                return 31;
            } else {
                // Si no es el primer mes del año, retrocedemos al último día del mes anterior
                let diasPorMesAnterior = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                // Si el mes anterior es febrero y el año actual es bisiesto, el mes anterior tiene 29 días
                if (mes === 3 && esBisiesto(anio)) {
                    return 29;
                } else {
                    return diasPorMesAnterior[mes - 2]; // Restamos 2 porque los índices del array comienzan desde 0
                }
            }
        }
    } else {
        return "Número de mes inválido";
    }
}

// Ejemplo de uso:
let dia = 1;
let mes = 3; // Por ejemplo, marzo
let anio = 2024; // Ejemplo de año bisiesto
let diaAnt = diaAnterior(dia, mes, anio);
console.log("El día anterior a", dia + "/" + mes + "/" + anio, "es:", diaAnt);
