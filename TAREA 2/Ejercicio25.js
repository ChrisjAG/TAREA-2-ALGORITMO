//   25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta. mostrar el precio final incluyendo el 15% del IVA. 

const read = require("prompt-sync")();
const write = console.log;
function calcularPrecioFinal(precioVenta, anioFabricacion) {
    let precioFinal = precioVenta;
    if (anioFabricacion >= 2020 && anioFabricacion <= 2023) {
        const descuento = precioVenta * 0.05;
        precioFinal = precioVenta - descuento;
    }
    const iva = precioFinal * 0.15;
    precioFinal += iva;
    return precioFinal;
}
const precioVenta = parseFloat(read("Ingrese el precio de venta del vehículo nuevo: "));
const anioFabricacion = parseInt(read("Ingrese el año de fabricación del vehículo: "));
const precioFinal = calcularPrecioFinal(precioVenta, anioFabricacion);
write("El precio final incluyendo el IVA es: $" + precioFinal.toFixed(2));
