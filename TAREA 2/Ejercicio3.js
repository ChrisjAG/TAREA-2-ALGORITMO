// 3.  2 *(4 – 10 + 8)/2* 36 *(1/2)
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: resolver=0(calcular);
// Los calculos o procesos que se hacen con las variables
// Proceso:  resolver= 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
// La informacion de las variables procesadas
// Salida: escribir "El valor del problema es",resolver

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT
function problema(){
    let resolver=0
resolver=2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
write ("El valor del problema es",resolver)
}
problema()