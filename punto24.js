function imprimirValoresRepetidos(array) {
    // Objeto para realizar un seguimiento de cuántas veces aparece cada valor
    let conteo = {};

    // Iterar sobre la array y contar cuántas veces aparece cada valor
    for (let i = 0; i < array.length; i++) {
        let valor = array[i];
        if (conteo[valor]) {
            conteo[valor]++;
        } else {
            conteo[valor] = 1;
        }
    }

    // Iterar sobre el objeto de conteo y imprimir los valores que se repiten
    let valoresRepetidos = [];
    for (let clave in conteo) {
        if (conteo[clave] > 1) {
            valoresRepetidos.push(clave);
        }
    }

    // Imprimir los valores repetidos
    console.log("Valores que se repiten:", valoresRepetidos.join(", "));
}

// Ejemplo de uso:
let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
imprimirValoresRepetidos(array); // Output: Valores que se repiten: 6, 23, 33, 100
