var resultadoElement = document.querySelector('#resultadoCalc');

function insert(num) {
    var numero = resultadoElement.innerHTML;
    resultadoElement.innerHTML = numero + num;
}

function clean() {
    resultadoElement.innerHTML = "";
}

function back() {
    var resultado = resultadoElement.innerHTML;
    resultadoElement.innerHTML = resultado.substring(0, resultado.length - 1);
}

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Erro';
    }
}

function calculate() {
    var resultado = resultadoElement.innerHTML;
    if (resultado) {
        resultadoElement.innerHTML = evaluateExpression(resultado);
    }
}

