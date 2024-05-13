//  El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que:Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .Si tiene tipo 2 el aumento será del $200 Si tiene tipo 3, el aumento será del $300 Para cualquier otro tipo será del 500 Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de  crédito que tendrá una persona en su tarjeta considerando que después del aumento se tendrá que subir 10% adicionales a todas las tarjetas3w b}

const read = require('prompt-sync')();
const write = console.log;

function calcularNuevoLimite(tipoTarjeta) {
    let aumento = 0;

    if (tipoTarjeta === 1) {
        aumento = 100;
    } else if (tipoTarjeta === 2) {
        aumento = 200;
    } else if (tipoTarjeta === 3) {
        aumento = 300;
    } else {
        aumento = 500;
    }

    const aumentoTotal = aumento + aumento * 0.1; // Aumento del 10%
    return aumentoTotal;
}

function leernumeros() {
    const tipoTarjeta = parseFloat(read("Ingrese el tipo de tarjeta (1, 2, 3):"));
    const nuevoLimite = calcularNuevoLimite(tipoTarjeta);

    write("El nuevo límite de crédito para la tarjeta tipo " + tipoTarjeta + " es " + nuevoLimite + ".");


}

leernumeros()