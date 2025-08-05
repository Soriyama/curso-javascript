/* 
Funciones y arreglos
Funciones: bloques de código reutilizables 
Arreglos: colecciones de datos
*/
// Función para sumar dos números
//a es el primer argumento, b es el segundo argumento
function sumar(a, b) {
    return a + b;
}
// Función para restar dos números
function restar(a, b) { 
    return a - b;
}   
// arreglo de números
let numeros = [1, 2, 3, 4, 5];
// Función para imprimir los números del arreglo
function imprimirNumeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Llamadas a las funciones
// Al llamar a las funciones se envía el valor de los argumentos
console.log("Suma:", sumar(5, 3)); // Suma: 8
console.log("Resta:", restar(5, 3)); // Resta: 2
console.log("Números en el arreglo:"); // Mensaje antes de imprimir los números
imprimirNumeros(numeros); // Imprime los números del arreglo

//Funciones recursivas
// Función recursiva para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Caso base
    } else {
        return n * factorial(n - 1); // Llamada recursiva
    }
}
// Llamada a la función recursiva
console.log("Factorial de 5:", factorial(5)); // Factorial de 5