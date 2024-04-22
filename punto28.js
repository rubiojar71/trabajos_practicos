function capitalizarPrimerasLetras(cadena) {

    let palabras = cadena.split(' ');


    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

 
    let cadenaCapitalizada = palabras.join(' ');

    return cadenaCapitalizada;
}


let x = "prince of persia";
let resultado = capitalizarPrimerasLetras(x);
console.log(resultado); 
