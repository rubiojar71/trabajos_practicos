function esBisiesto(anio) {

    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function diaAnterior(dia, mes, anio) {
  
    if (mes >= 1 && mes <= 12) {
   
        if (dia > 1) {
     
            return dia - 1;
        } else {

            if (mes === 1) {
                
                return 31;
            } else {
              
                let diasPorMesAnterior = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
               
                if (mes === 3 && esBisiesto(anio)) {
                    return 29;
                } else {
                    return diasPorMesAnterior[mes - 2]; 
                }
            }
        }
    } else {
        return "Número de mes inválido";
    }
}


let dia = 1;
let mes = 3; 
let anio = 2024; 
let diaAnt = diaAnterior(dia, mes, anio);
console.log("El día anterior a", dia + "/" + mes + "/" + anio, "es:", diaAnt);
