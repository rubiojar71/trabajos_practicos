function invertirNumero(numero) {

    let numeroString = numero.toString();
    let caracteres = numeroString.split('');

    let caracteresInvertidos = caracteres.reverse();


    let numeroInvertido = parseInt(caracteresInvertidos.join(''));

    return numeroInvertido;
}


let x = 32443;
let resultado = invertirNumero(x);
console.log(resultado); // Output: 34423
