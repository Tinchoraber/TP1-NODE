import { URLSearchParams, URL } from 'url';
let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    const miURL = new URL(laURL);
    
    const parametros = new URLSearchParams(miURL.search);
    
    const resultado = {
        host: miURL.origin,
        pathname: miURL.pathname,
        parametros: parametros
    };

    return resultado;
}


