// 20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.  
const read = require("prompt-sync")();
const write = console.log;

function verificarNumero(num) {
    if (num > 0 && num <= 100) {
        return "El número es mayor que 0 y menor o igual a 100.";
    } else {
        return "El número no es mayor que 0 y menor o igual a 100.";
    }
}

const num = parseInt(read("Ingrese un número: "));
const resultado = verificarNumero(num);

write(resultado);
