// 5.  ((8 > 2) | | (932 < 23) ) && 4 == 2

// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  respuesta=0 (PROCESO);
// Los calculos o procesos que se hacen con las variables
// Proceso:   respuesta=((8 > 2) || (932 < 23)) && 4 == 2;
// La informacion de las variables procesadas
// Salida:  escribir "la respuesta del ejercicio:",respuesta

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT

function ejercicio5(){
    let respuesta=0
    respuesta=((8 > 2) || (932 < 23)) && 4 == 2;
    write("la respuesta del ejercicio:",respuesta)
}
ejercicio5()