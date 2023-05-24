let num1 = "";
let num2 = "";
let operador = "";
let resultado = document.getElementById("resultado");

function agregarNumero(num) {
    if (operador == "") {
        num1 += num;
        resultado.value = num1;
    } else {
        num2 += num;
        resultado.value = num2;
    }
}

function operacion(op) {
    operador = op;
}

function calcular() {
    let resultadoFinal = 0;
    switch (operador) {
        case "+":
            resultadoFinal = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            resultadoFinal = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            resultadoFinal = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            resultadoFinal = parseInt(num1) / parseInt(num2);
            break;
    }
    resultado.value = resultadoFinal;
}

function borrar() {
    num1 = "";
    num2 = "";
    operador = "";
    resultado.value = "";
}








