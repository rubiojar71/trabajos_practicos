function imprimirNumeroMasBajo(array) {
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    let minimo = array[0]; 

   
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }

    console.log("El número más bajo del array es:", minimo);
}


let numeros = [5, 3, 9, 1, 7];
imprimirNumeroMasBajo(numeros); 
