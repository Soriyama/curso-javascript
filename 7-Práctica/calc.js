const botonNumeros = document.getElementsByName('data-number');
const botonOperadores = document.getElementsByName('data-operator');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrar = document.getElementsByName('data-borrar')[0];
var resultado = document.getElementById('result');

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;


botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarNumero(boton.innerText);
    });
});

botonOperadores.forEach(function(boton) {
    boton.addEventListener('click', function() {
       seleccionarOperacion(boton.innerText);
    });
});

botonIgual.addEventListener('click', function() {
    calcularResultado();
    actualizarDisplay();
});

botonBorrar.addEventListener('click', function() {
    console.log('Borrar');
    borrar();
    actualizarDisplay();
});

function agregarNumero(numero) {
    opeActual = opeActual.toString() + numero.toString();
    actualizarDisplay();
}
function actualizarDisplay() {
    resultado.value = opeActual;
}
// Funcion para borrar las operaciones y actualizar el display
function borrar() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}
function seleccionarOperacion(operador) {
    if (opeActual === '') return;
    if (opeAnterior !== '') {
        calcularResultado();
    }
    operacion = operador.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcularResultado() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

borrar();