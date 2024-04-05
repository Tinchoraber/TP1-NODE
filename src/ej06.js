import { URLSearchParams, URL } from 'url';
let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
function parsearUrl(url) {
    try {
        const miURL = new URL(url);
        
        const parametros = new URLSearchParams(miURL.search);
        
        const resultado = {
            host: miURL.origin,
            pathname: miURL.pathname,
            parametros: parametros
        };

        return resultado;
    } catch (error) {
        console.error("Error al parsear la URL:", error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}



