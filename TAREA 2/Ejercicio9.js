//Calculadora de sueldo con aumento: pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibira. Calcula y muestra el nuevo salario despues del aumento. 


const read = require("prompt-sync")();
const write = console.log;


function calcularNuevoSalario() {
    const aumentoDecimal = aumentoPorcentaje / 100;
    const aumento = salarioActual * aumentoDecimal;
    const nuevoSalario = salarioActual + aumento;
    return nuevoSalario;
}


const salarioActual = parseFloat(read("Ingrese su salario actual: "));
const aumentoPorcentaje = parseFloat(read("Ingrese el porcentaje de aumento: "));


const nuevoSalario = calcularNuevoSalario(salarioActual, aumentoPorcentaje);


write("El nuevo salario después del aumento es: $" + nuevoSalario.toFixed(2));


calcularNuevoSalario();
