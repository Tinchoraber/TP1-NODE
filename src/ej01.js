let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
let returnValue = '';
let splitString = texto1.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");

let splitString2 = texto2.split("");
let reverseArray2 = splitString2.reverse();
let joinArray2 = reverseArray2.join("");

returnValue = joinArray2.concat(joinArray)
return returnValue;
}