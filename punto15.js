function esBisiesto(anio) {
    // Un año es bisiesto si es divisible entre 4
    // Pero no es bisiesto si es divisible entre 100, a menos que también sea divisible entre 400
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Ejemplo de uso:
let anio = 2024; // Ejemplo de año bisiesto
if (esBisiesto(anio)) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + " no es un año bisiesto.");
}
