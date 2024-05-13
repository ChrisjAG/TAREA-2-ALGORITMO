//Pedir al usuario dos números y mostrar si son iguales o diferentes.
// ANALISIS DEL REQUERIMIENTO
// Entrada: numero1=0, numero2=0
// Proceso: 
// Si numero1 == numero2  entonces 
//     mostrar "Los numeros ingresados son iguales "
// Sino 
//     mostrar "Los numeros ingresados son diferentes "
// finSi
// Salida: Mensaje resultado (numero igual o diferente)
const read = require('prompt-sync')();
function numeroIgualDiferente(){
    let numero1="0", numero2="0"
    numero1=parseInt(read("Ingrese el primer numero: "))
    numero2=parseInt(read("Ingrese el segundo numero: "))
    if (numero1===numero2){
        console.log("Los numeros ingresados son iguales")
    } else{
        console.log("Los numeros ingresados son diferentes")
    } 
}
numeroIgualDiferente()