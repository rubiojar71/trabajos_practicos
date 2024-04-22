function imprimirValoresRepetidos(array) {
  
    let conteo = {};

  
    for (let i = 0; i < array.length; i++) {
        let valor = array[i];
        if (conteo[valor]) {
            conteo[valor]++;
        } else {
            conteo[valor] = 1;
        }
    }

    let valoresRepetidos = [];
    for (let clave in conteo) {
        if (conteo[clave] > 1) {
            valoresRepetidos.push(clave);
        }
    }

    console.log("Valores que se repiten:", valoresRepetidos.join(", "));
}

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
imprimirValoresRepetidos(array); 
