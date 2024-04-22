function capitalizarPrimerasLetras(cadena) {
    // Dividir la cadena en palabras
    let palabras = cadena.split(' ');

    // Iterar sobre cada palabra y capitalizar la primera letra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Unir las palabras en una cadena
    let cadenaCapitalizada = palabras.join(' ');

    return cadenaCapitalizada;
}

// Ejemplo de uso:
let x = "prince of persia";
let resultado = capitalizarPrimerasLetras(x);
console.log(resultado); // Output: "Prince Of Persia"
