//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%
//ANALISIS DEL REQUERIMIENTO
//ENTRADA: precioTotal=0.0, descuentoCupon=0, descuento=0.0, precioDescuento=0.0, montoFinal=0.0, IVA=0.0
//PROCESO: Si precioTotal > 10 entonces
// descuento= precioTotal * descuentoCupon/100
// precioDescuento= precioTotal - descuento
// si no precioDescuento=0
// IVA= precioDescuento * 15/100
// montoFinal= precioDescuento + IVA
//SALIDA: Mostrar el montoFinal 
const read = require("prompt-sync")()
function pagofinal(){
    let precioTotal=0.0, descuentoCupon=0, descuento=0.0, precioDescuento=0.0, montoFinal=0.0, IVA=0.0
    precioTotal=parseFloat(read("Ingrese el precio total de su compra: $"))
    descuentoCupon=parseFloat(read("Ingrese el cupon de descuento a aplicar en %: "))
    if (precioTotal > 10){
        (descuento= precioTotal * descuentoCupon /100)
        precioDescuento= precioTotal - descuento 
    } else {
        precioDescuento= 0
    }
    IVA= precioDescuento * 0.15
    montoFinal= precioDescuento + IVA
 console.log("El monto final con el descuento y el IVA del 15% es: $", montoFinal)
}
pagofinal() 