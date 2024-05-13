//  Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100.

const read = require('prompt-sync')();
const write = console.log;

function calcularPrecioFinal() {
    let precioProducto = parseFloat(read("Ingrese el precio del producto: "));
    let porcentajeDescuento = parseFloat(read("Ingrese el porcentaje de descuento aplicado: "));

    if (precioProducto > 100) {
        let descuento = (precioProducto * porcentajeDescuento) / 100;
        let precioFinal = precioProducto - descuento;
        write("El precio final luego de aplicar un descuento del " + porcentajeDescuento + " es: " + precioFinal.toFixed(2) + ".");
    } else {
        write("El precio del producto no es mayor a $100. No se aplica ningún descuento.");
    }
}

calcularPrecioFinal();



