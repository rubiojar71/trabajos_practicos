function imprimirNumeroMasBajo(array) {
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    let minimo = array[0]; // Suponemos que el primer elemento es el mínimo

    // Iteramos sobre el array para encontrar el número más bajo
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }

    console.log("El número más bajo del array es:", minimo);
}

// Ejemplo de uso:
let numeros = [5, 3, 9, 1, 7];
imprimirNumeroMasBajo(numeros); // Output: El número más bajo del array es: 1
