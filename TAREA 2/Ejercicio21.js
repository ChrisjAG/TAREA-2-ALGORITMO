//  21. Solicitar al usuario un número y mostrar si es un número de un solo dígito.  
const read = require("prompt-sync")();
const write = console.log;

function verificarNumero(num) {
    if (num >= 0 && num <= 9) {
        return "El número es de un solo dígito.";
    } else {
        return "El número no es de un solo dígito.";
    }
}

const num = parseInt(read("Ingrese un número: "));
const resultado = verificarNumero(num);

write(resultado);
