// Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
// en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
// de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
// aplicar el impuesto.
// ANALISIS DEL REQUERIMIENTO
// ENTRADA: precioArticulo=0.0, porcentajeImpuesto=0, precioFinal = 0
// PROCESO: Si precioArticulo > 200 entonces 
// precioFinal = precioArticulo + precioArticulo * porcentajeImpuesto / 100
// si no  precioFinal = precioArticulo
// SALIDA: Mostrar precio final luego de aplicar el impuesto
const read = require("prompt-sync")();

function calcularPrecioFinal() {
    let precioArticulo=0.0, porcentajeImpuesto=0, precioFinal = 0
    precioArticulo = parseFloat(read("Ingrese el precio del artículo: $"))
    porcentajeImpuesto = parseFloat(read("Ingrese el porcentaje de impuesto de ventas: "))

    if (precioArticulo > 200) {
        precioFinal = precioArticulo + precioArticulo * porcentajeImpuesto / 100
    } else {
        
        precioFinal = precioArticulo
    }

    console.log("El precio final luego de aplicar el impuesto es: $" , precioFinal)
}

calcularPrecioFinal()