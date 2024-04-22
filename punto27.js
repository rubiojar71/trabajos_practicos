function ordenAlfabetico(cadena) {
    // Convertir la cadena en un array de caracteres, eliminar la puntuación y los números
    let caracteres = cadena.toLowerCase().replace(/[^a-z]/g, '').split('');

    // Ordenar el array de caracteres en orden alfabético
    let caracteresOrdenados = caracteres.sort();

    // Unir los caracteres ordenados en una cadena
    let cadenaOrdenada = caracteresOrdenados.join('');

    return cadenaOrdenada;
}

// Ejemplo de uso:
let x = 'webmaster';
let resultado = ordenAlfabetico(x);
console.log(resultado); // Output: abeemrstw
