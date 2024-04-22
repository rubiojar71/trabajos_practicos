function esBisiesto(anio) {

    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function cantidadDiasMes(mes, anio) {
   
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (mes >= 1 && mes <= 12) {
       
        if (mes === 2 && esBisiesto(anio)) {
            return 29;
        } else {
            return diasPorMes[mes - 1]; 
        }
    } else {
        return "Número de mes inválido";
    }
}


let dia = 15;
let mes = 2; 
let anio = 2024; 
let cantidadDias = cantidadDiasMes(mes, anio);
console.log("El mes", mes, "del año", anio, "tiene", cantidadDias, "días.");
