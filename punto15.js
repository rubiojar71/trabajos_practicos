function esBisiesto(anio) {

    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}


let anio = 2024; 
if (esBisiesto(anio)) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + " no es un año bisiesto.");
}
