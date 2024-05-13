//   24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a 40 y menor a 60 se queda para recuperación caso contario pierde la materia. 
const read = require("prompt-sync")();
const write = console.log;
function determinarEstado(notaExamen) {
    if (notaExamen >= 60) {
        return "Aprobado";
    } else if (notaExamen > 40 && notaExamen < 60) {
        return "Recuperación";
    } else {
        return "Reprobado";
    }
}
const notaExamen = parseFloat(read("Ingrese su nota en el examen: "));
const estado = determinarEstado(notaExamen);
write("Tu estado después del examen es: " + estado);
