function invertirNumero(numero) {
    // Convertir el número en una cadena y dividirlo en un array de caracteres
    let numeroString = numero.toString();
    let caracteres = numeroString.split('');

    // Invertir el array de caracteres
    let caracteresInvertidos = caracteres.reverse();

    // Unir los caracteres invertidos en una cadena y convertirla de nuevo en un número
    let numeroInvertido = parseInt(caracteresInvertidos.join(''));

    return numeroInvertido;
}

// Ejemplo de uso:
let x = 32443;
let resultado = invertirNumero(x);
console.log(resultado); // Output: 34423
