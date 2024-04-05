import {PI, sumar, restar, multiplicar, dividir, array} from './modules/matematica.js';
let total, total2, total3, total4, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); 
total = sumar(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
total2 = restar(numero1, numero2); 
console.log(`restar(${numero1}, ${numero2}) = ${total2}`);
total3 = multiplicar(numero1, numero2); 
console.log(`multiplicar(${numero1}, ${numero2}) = ${total3}`);
total4 = dividir(numero1, numero2); 
console.log(`dividir(${numero1}, ${numero2}) = ${total4}`);
console.log(array)
