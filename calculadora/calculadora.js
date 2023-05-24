let num1 = "";
let num2 = "";
let operador = "";
let resultado = document.getElementById("resultado");

document.addEventListener("keydown", function(e) {
    const key = e.key;
    if (/[0-9]/.test(key)) {
      // Números del teclado numérico
      agregarNumero(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      // Operadores del teclado
      operacion(key);
    } else if (key === "Enter" || key === "=") {
      // Tecla Enter o igual para calcular
      calcular();
    } else if (key === "Escape") {
      // Tecla Escape para borrar
      borrar();
    }
  });

function agregarNumero(num) {
    if (operador == "") {//Si el operador es vacio el numero ingrasado se pone en el num1
        num1 += num;
        resultado.value = num1;
    } else {
        num2 += num;//pero si el operador ya fue seleccionado se guarda en el num2
        resultado.value = num2;
    }
}

function operacion(op) {//para guardar el operador en una variable para usarlo en la operacion
    operador = op;
}

function calcular() {
    let resultadoFinal = 0;//inicializa la variable del resultado en 0
    switch (operador) {// el switch para recibir el operador y mostrar los distintos casos
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

function borrar() {// la funcion para  borrar cualquier cosa y volver a vacio
    num1 = "";
    num2 = "";
    operador = "";
    resultado.value = "";
}








