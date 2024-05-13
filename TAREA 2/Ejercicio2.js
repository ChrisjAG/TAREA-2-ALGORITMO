// 2. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: resolver=" "(PROCESO);
// Los calculos o procesos que se hacen con las variables
// Proceso:  resolver=(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
// La informacion de las variables procesadas
// Salida: escribir "El valor del problema es",resolver

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT
function problema(){
    let resolver=""
resolver=(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
write ("El valor del problema es",resolver)
}
problema()