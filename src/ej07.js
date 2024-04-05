import { getCountry } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    let moneda = getCountry(codigoPais);
    if (moneda) {
        return moneda.cur;
    } else {
        return "No existe";
    }
}