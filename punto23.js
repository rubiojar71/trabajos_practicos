function imprimirValorEnIndice(array, indice) {
    // Verificar si el índice está dentro del rango válido
    if (indice >= 0 && indice < array.length) {
        console.log("El valor en el índice", indice, "es:", array[indice]);
    } else {
        console.log("El índice está fuera del rango válido.");
    }
}

// Ejemplo de uso:
let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
let indice = 1;
imprimirValorEnIndice(array, indice); // Output: El valor en el índice 1 es: 6
