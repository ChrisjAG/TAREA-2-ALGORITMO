// 17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo 
const read = require("prompt-sync")();
const write = console.log;

function compararNombres(nombre1, nombre2) {
    if (nombre1 === nombre2) {
        return "Los nombres son iguales.";
    } else if (nombre1 > nombre2) {
        return "El primer nombre es mayor que el segundo.";
    } else {
        return "El primer nombre es menor que el segundo.";
    }
}

const nombre1 = read("Ingrese el primer nombre: ");
const nombre2 = read("Ingrese el segundo nombre: ");
const resultado = compararNombres(nombre1, nombre2);

write(resultado);
