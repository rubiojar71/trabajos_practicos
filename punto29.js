function palabraMasLarga(frase) {

    let palabras = frase.split(' ');


    let palabraMasLarga = '';

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

let x = "Tutorial de desarrollo web";
let resultado = palabraMasLarga(x);
console.log(resultado); 
