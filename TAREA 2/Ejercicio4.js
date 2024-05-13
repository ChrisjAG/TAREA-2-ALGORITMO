// 4.  260 / 12 + 54 % 3 – 85 % 7
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: resultado=0 (PROCESO);
// Los calculos o procesos que se hacen con las variables
// Proceso:   resultado = 260 / 12 + 54 % 3 - 85 % 7
// La informacion de las variables procesadas
// Salida: escribir "El resultado del problema es:",resultado
const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT

function ejercicio4(){
    let resultado=0
    resultado = 260 / 12 + 54 % 3 - 85 % 7
write("El resultado del problema es:",resultado)
}
ejercicio4()