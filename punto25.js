let myColor = ["Red", "Green", "White", "Black"];
let coloresEspañol = {
    "Red": "Rojo",
    "Green": "Verde",
    "White": "Blanco",
    "Black": "Negro"
};

let cadenaEspañol = myColor.map(color => coloresEspañol[color]).join(", ");
console.log(cadenaEspañol);
