// Solicitar al usuario un número y mostrar si es positivo o negativo.
// ANALISIS DEL REQUERIMIENTO
//ENTRADA: numero=0
//PROCESOS: si numero > 0 entonces es positivo
// si no numero < 0 entonces es negativo
//SALIDA: Mostrar el mensaje 
const read = require("prompt-sync")();

function verificarPositivoNegativo() {
    let numero = parseFloat(read("Ingrese un número: "))
    if (numero > 0) {
        console.log("El número ingresado es positivo.")
    } else if (numero < 0) {
        console.log("El número ingresado es negativo.")
    } else {
        console.log("El número ingresado es cero.")
    }
}

verificarPositivoNegativo()