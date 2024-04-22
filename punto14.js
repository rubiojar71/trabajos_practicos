function cantidadDiasMes(numeroMes) {
    
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   
    if (numeroMes >= 1 && numeroMes <= 12) {
        return diasPorMes[numeroMes - 1]; 
    } else {
        return "Número de mes inválido";
    }
}


let mes = 3; 
let cantidadDias = cantidadDiasMes(mes);
console.log("El mes", mes, "tiene", cantidadDias, "días.");
