function cantidadDiasMes(numeroMes) {
    // Array con la cantidad de días por mes (suponiendo que no es un año bisiesto)
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verificar si el número de mes está dentro del rango válido (1 a 12)
    if (numeroMes >= 1 && numeroMes <= 12) {
        return diasPorMes[numeroMes - 1]; // Restamos 1 porque los índices del array comienzan desde 0
    } else {
        return "Número de mes inválido";
    }
}

// Ejemplo de uso:
let mes = 3; // Por ejemplo, marzo
let cantidadDias = cantidadDiasMes(mes);
console.log("El mes", mes, "tiene", cantidadDias, "días.");
