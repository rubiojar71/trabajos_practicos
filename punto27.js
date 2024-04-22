function ordenAlfabetico(cadena) {

    let caracteres = cadena.toLowerCase().replace(/[^a-z]/g, '').split('');


    let caracteresOrdenados = caracteres.sort();


    let cadenaOrdenada = caracteresOrdenados.join('');

    return cadenaOrdenada;
}


let x = 'webmaster';
let resultado = ordenAlfabetico(x);
console.log(resultado); // Output: abeemrstw
