//Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
// ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado.
// ANALISIS DEL REQUERIMIENTO
// ENTRADA: sueldoActual=0.0, porcentajeAnual=0, sueldoEsperado=0.0 
// PROCESO: Si sueldoActual < 500 entonces 
// sueldoAnual= sueldoActual +  sueldoActual* porcentajeAnual /100
// sueldoEsperado= sueldoActual*porcentajeAnual/100 + 5/100
// si no sueldoEsperado= sueldoActual
// SALIDA: Mostrar sueldoEsperado con incremento aplicado
const read = require("prompt-sync")()
function sueldoFinal(){
    let sueldoActual=0.0, porcentajeAnual=0,sueldoAnual=0.0, sueldoEsperado=0.0
    sueldoActual=parseFloat(read("Ingrese su sueldo actual: $"))
    porcentajeAnual=parseFloat(read("Ingrese el porcentaje de incremento salarial anual: "))
    if (sueldoActual < 500){
        sueldoAnual= sueldoActual +  sueldoActual* porcentajeAnual /100
        sueldoEsperado= sueldoAnual + sueldoAnual * 5/100
    } else{
        sueldoEsperado=sueldoActual
    }
    console.log("El sueldo esperado con el incremento aplicado es: $" ,sueldoEsperado)
}
sueldoFinal()