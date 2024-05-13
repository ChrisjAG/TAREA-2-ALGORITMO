//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y muestra el monto final con el descuento aplicado más el IVA del 15%

const read = require('prompt-sync')();
const write = console.log;

function calcularMontoFinal() {
    let totalCuenta = parseFloat(read("Ingrese el total de su cuenta en el restaurante: "));
    let porcentajeDescuento = parseFloat(read("Ingrese el porcentaje de descuento ofrecido por ser cliente frecuente: "));
    
    let descuento = 0;
    let montoFinal = 0;
    const iva = 0.15; // 15% de IVA

    if (totalCuenta > 70) {
        descuento = (totalCuenta * porcentajeDescuento) / 100;
    }

    montoFinal = totalCuenta - descuento; // Aplicar descuento

    let totalConIVA = montoFinal * (1 + iva); // Calcular total con IVA

    write("Monto final con descuento y IVA incluido: $" + totalConIVA.toFixed(2));

}

calcularMontoFinal();
