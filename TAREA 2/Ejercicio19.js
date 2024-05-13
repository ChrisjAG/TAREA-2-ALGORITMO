//  19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
const read = require("prompt-sync")();
const write = console.log;

function verificarNumero(num) {
    if (num % 2 === 0) {
        return "El número es divisible por 2.";
    } else {
        return "El número es impar.";
    }
}

const num = parseInt(read("Ingrese un número: "));
const resultado = verificarNumero(num);

write(resultado);
