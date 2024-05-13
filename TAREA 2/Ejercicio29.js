//Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
// del bono de antigüedad del empleado aplicando el 3% del salario por el número de
// años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
// antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.
// ANALISIS DEL REQUERIMIENTO
// ENTRADA: salarioActual=0.0, aniosAntiguedad=0, bonoAntiguedad=0.0 
// PROCESO: Calcular bonoAntiguedad si aniosAntiguedad > 3 anios
// entonces bonoantiguedad= salarioActual * 0.03 
// si no bonoantiguedad= 0
// SALIDA: Mostrar el Salario y el bonoAntiguedad
const read = require("prompt-sync")()
function bonoTrabajo(){
    let salarioActual=0.0, aniosAntiguedad=0, bonoAntiguedad=0.0
salarioActual=parseFloat(read("Ingrese su salario Actual: $"))
aniosAntiguedad=parseInt(read("Ingrese sus anios de Antiguedad: "))
if ( aniosAntiguedad > 3){
    (bonoAntiguedad= salarioActual * 0.03 * aniosAntiguedad)
} else{
    (bonoAntiguedad= 0)
}
console.log("Su salario es $", salarioActual)
console.log("El bono por antiguedad es $",bonoAntiguedad)
}
bonoTrabajo()
