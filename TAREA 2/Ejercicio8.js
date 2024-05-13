//8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
//es positivo par o impar múltiplo de 7.
// ANALISIS DEL REQUERIMIENTO
//ENTRADA: numero=0.0
//PROCESO: numero< -20  
// numero > 0    si  numero % 2 == 0 
// si no numero % 7 == 0
//SALIDA: Mostrar el Mensaje

const read = require("prompt-sync")();
function verificarNumero() {
    const numero = parseFloat(read("Ingrese un número: "))
    if (numero < -20) {
        console.log("El número es negativo y menor que -20.")
    } else if (numero > 0) {
        if (numero % 2 == 0) {
            console.log("El número es positivo y par.")
        } else {
            if (numero % 7 == 0) {
                console.log("El número es positivo e impar y es múltiplo de 7.")
            } else {
                console.log("El número es positivo e impar y no es múltiplo de 7.")
            }
        }
    } 
}

verificarNumero()