//. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.



const read = require('prompt-sync')();
const write = console.log;

function calcularTotalConIVA() {
    let montoTotal = 0, añoCompra = 0, iva = 0, totalConIVA = 0;
    
    write("Ingrese el monto total de la factura:");
    montoTotal = parseFloat(read());
    write("Ingrese el año de la compra:");
    añoCompra = parseInt(read());

    if (añoCompra < 2024) {
        iva = 0.12; // 12% de IVA
    } else {
        iva = 0.15; // 15% de IVA
    }

    totalConIVA = montoTotal * (1 + iva);

    write("Monto total a pagar incluyendo el IVA:", totalConIVA.toFixed(2));
}

calcularTotalConIVA();

