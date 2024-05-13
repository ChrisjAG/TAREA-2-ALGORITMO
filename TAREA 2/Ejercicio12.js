// Solicitar al usuario su edad y mostrar si es mayor o menor de edad.


const read = require("prompt-sync")();
const write = console.log;

function mayoromenoredad() {

const edad = parseInt(read("Ingrese su edad: "));


if (edad >= 18) {
    write("Usted es mayor de edad.");
} else {
    write("Usted es menor de edad.");
}

}

mayoromenoredad();