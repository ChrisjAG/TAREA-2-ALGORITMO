// 1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: a = 8(proceso), b = 5(proceso);
// Los calculos o procesos que se hacen con las variables
// Proceso:  v = 2 * b + a / 2 + 4 * b % a
// La informacion de las variables procesadas
// Salida: escribir "El valor del problema es",resolver

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT
function EcuentreElValor(){
let a = 8, b = 5;
v = 2 * b + a / 2 + 4 * b % a

write("El valor de v es:", v);
}
EcuentreElValor()