function palabraMasLarga(frase) {
    // Dividir la frase en palabras
    let palabras = frase.split(' ');

    // Inicializar una variable para almacenar la palabra más larga
    let palabraMasLarga = '';

    // Iterar sobre cada palabra y comparar su longitud con la longitud de la palabra más larga
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

// Ejemplo de uso:
let x = "Tutorial de desarrollo web";
let resultado = palabraMasLarga(x);
console.log(resultado); // Output: "desarrollo"
