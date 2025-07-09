/* 
Arreglos en JavaScript
Arreglos: colecciones de datos
Métodos de arreglos: operaciones comunes
Iteración de arreglos: recorrer elementos
Funciones de arreglos: operaciones con funciones
Estructuras de datos avanzadas: arreglos multidimensionales

*/
// Arreglos
let numeros = [1, 2, 3, 4, 5]; // Arreglo de números
let frutas = ["manzana", "banana", "naranja"]; // Arreglo de cadenas    
let mezclado = [1, "dos", true, null]; // Arreglo con diferentes tipos de datos
// Acceso a elementos del arreglo
console.log("Acceso a elementos del arreglo:");
console.log(numeros[0]); // Primer elemento (1)
console.log(frutas[1]); // Segundo elemento (banana)
console.log(mezclado[2]); // Tercer elemento (true)

// Modificación de elementos del arreglo
console.log("Modificación de elementos del arreglo:");
numeros[0] = 10; // Cambia el primer elemento a 10
console.log(numeros); // [10, 2, 3, 4, 5]
frutas[1] = "kiwi"; // Cambia el segundo elemento a kiwi
console.log(frutas); // ["manzana", "kiwi", "naranja"]
mezclado[3] = "nuevo"; // Cambia el cuarto elemento a "nuevo"
console.log(mezclado); // [1, "dos", true, "nuevo"]
// Longitud del arreglo
console.log(numeros.length); // Longitud del arreglo numeros (5)
console.log(frutas.length); // Longitud del arreglo frutas (3)
console.log(mezclado.length); // Longitud del arreglo mezclado (4)

// Métodos de arreglos
// Agregar elementos al final del arreglo
console.log("Agregar elementos al final del arreglo:");
numeros.push(6); // Agrega 6 al final del arreglo numeros
console.log(numeros); // [10, 2, 3, 4, 5, 6]
frutas.push("uva"); // Agrega "uva" al final del arreglo frutas
console.log(frutas); // ["manzana", "kiwi", "naranja", "uva"]
mezclado.push("nuevo elemento"); // Agrega "nuevo elemento" al final del arreglo
console.log(mezclado); // [1, "dos", true, "nuevo", "nuevo elemento"]

// Eliminar el último elemento del arreglo
console.log("Eliminar el último elemento del arreglo:");
numeros.pop(); // Elimina el último elemento del arreglo numeros
console.log(numeros); // [10, 2, 3, 4, 5]
frutas.pop(); // Elimina el último elemento del arreglo frutas
console.log(frutas); // ["manzana", "kiwi", "naranja"]
mezclado.pop(); // Elimina el último elemento del arreglo mezclado
console.log(mezclado); // [1, "dos", true, "nuevo"]

// Agregar elementos al inicio del arreglo
console.log("Agregar elementos al inicio del arreglo:");
numeros.unshift(0); // Agrega 0 al inicio del arreglo numeros
console.log(numeros); // [0, 10, 2, 3, 4, 5]
frutas.unshift("fresa"); // Agrega "fresa" al inicio del arreglo frutas
console.log(frutas); // ["fresa", "manzana", "kiwi", "naranja"]
mezclado.unshift("inicio"); // Agrega "inicio" al inicio del arreglo mezclado
console.log(mezclado); // ["inicio", 1, "dos", true, "nuevo"]

// Eliminar el primer elemento del arreglo
console.log("Eliminar el primer elemento del arreglo:");
numeros.shift(); // Elimina el primer elemento del arreglo numeros
console.log(numeros); // [10, 2, 3, 4, 5]
frutas.shift(); // Elimina el primer elemento del arreglo frutas
console.log(frutas); // ["manzana", "kiwi", "naranja"]
mezclado.shift(); // Elimina el primer elemento del arreglo mezclado
console.log(mezclado); // [1, "dos", true, "nuevo"]

// Buscar un elemento en el arreglo
console.log("Buscar un elemento en el arreglo:");
console.log(numeros.indexOf(3)); // Índice del elemento 3 en el arreglo numeros (2)
console.log(frutas.indexOf("kiwi")); // Índice del elemento "kiwi" en el arreglo frutas (1)
console.log(mezclado.indexOf(true)); // Índice del elemento true en el arreglo
console.log(mezclado.indexOf("no existe")); // -1 si no se encuentra el elemento

// Verificar si un elemento está en el arreglo
console.log("Verificar si un elemento está en el arreglo:");
console.log(numeros.includes(4)); // true si el elemento 4 está en el arreglo numeros
console.log(frutas.includes("pera")); // false si el elemento "pera" no está en el arreglo frutas
console.log(mezclado.includes("nuevo")); // true si el elemento "nuevo" está en el arreglo mezclado

// Iteración de arreglos
// Usando un bucle for
console.log("Iteración de arreglos:");
console.log("Usando un bucle for:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Imprime cada elemento del arreglo numeros
}
// Usando forEach
console.log("Usando forEach:");
numeros.forEach(function(num) {
    console.log(num); // Imprime cada elemento del arreglo numeros
});
// Usando for...of
console.log("Usando for...of:");
for (let fruta of frutas) {
    console.log(fruta); // Imprime cada elemento del arreglo frutas
}
// Usando for...in (índices)
console.log("Usando for...in:");
for (let index in mezclado) {
    console.log(mezclado[index]); // Imprime cada elemento del arreglo mezclado
}
// Usando map para crear un nuevo arreglo
console.log("Usando map:");
let cuadrados = numeros.map(function(num) {
    return num * num; // Crea un nuevo arreglo con los cuadrados de los números
});
console.log(cuadrados); // Imprime el nuevo arreglo de cuadrados

// Usando filter para filtrar elementos
console.log("Usando filter:");
let pares = numeros.filter(function(num) {
    return num % 2 === 0; // Crea un nuevo arreglo con los números pares
});
console.log(pares); // Imprime el nuevo arreglo de números pares

// Usando reduce para sumar todos los elementos
console.log("Usando reduce:");
let suma = numeros.reduce(function(acumulador, num) {
    return acumulador + num; // Suma todos los números del arreglo
}, 0);
console.log(suma); // Imprime la suma de todos los números

// Usando find para encontrar el primer elemento que cumple una condición
console.log("Usando find:");
let primerPar = numeros.find(function(num) {
    return num % 2 === 0; // Encuentra el primer número par
});
console.log(primerPar); // Imprime el primer número par (10)

// Usando some para verificar si al menos un elemento cumple una condición
console.log("Usando some:");
let hayImpares = numeros.some(function(num) {       
    return num % 2 !== 0; // Verifica si hay al menos un número impar
});
console.log(hayImpares); // true si hay al menos un número impar

// Arreglos multidimensionales
// Arreglos multidimensionales: arreglos dentro de arreglos
console.log("Arreglos multidimensionales:");
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // Arreglo bidimensional (matriz)
// Acceso a elementos de la matriz
console.log(matriz[0][0]); // Primer elemento (1)
console.log(matriz[1][1]); // Elemento del centro (5)
console.log(matriz[2][2]); // Último elemento (9)
// Iteración de una matriz
for (let fila of matriz) {
    for (let elemento of fila) {
        console.log(elemento); // Imprime cada elemento de la matriz
    }
}

// Funciones con arreglos
// Función para sumar todos los elementos de un arreglo
console.log("Funciones con arreglos:");
console.log("Suma de todos los elementos del arreglo numeros:");
function sumarArreglo(arr) {
    return arr.reduce(function(acumulador, num) {
        return acumulador + num; // Suma todos los números del arreglo
    }, 0);
}

// Llamada a la función con el arreglo numeros
let sumaNumeros = sumarArreglo(numeros);
console.log(sumaNumeros); // Imprime la suma de los números del arreglo numeros

// Función para encontrar el elemento más grande en un arreglo
console.log("Elemento más grande del arreglo numeros:");
function maximoArreglo(arr) {
    return arr.reduce(function(max, num) {
        return num > max ? num : max; // Devuelve el número más grande del arreglo
    }, arr[0]);
}
// Llamada a la función con el arreglo numeros
let maximoNumeros = maximoArreglo(numeros);
console.log(maximoNumeros); // Imprime el número más grande del arreglo numeros

// Función para encontrar el elemento más pequeño en un arreglo
console.log("Elemento más pequeño del arreglo numeros:");
function minimoArreglo(arr) {
    return arr.reduce(function(min, num) {
        return num < min ? num : min; // Devuelve el número más pequeño del arreglo
    }, arr[0]);
}       
// Llamada a la función con el arreglo numeros
let minimoNumeros = minimoArreglo(numeros);
console.log(minimoNumeros); // Imprime el número más pequeño del arreglo numeros

// Función para invertir un arreglo
console.log("Arreglo numeros invertido:");
function invertirArreglo(arr) {
    return arr.slice().reverse(); // Crea una copia del arreglo y lo invierte
}       
// Llamada a la función con el arreglo numeros
let numerosInvertidos = invertirArreglo(numeros);
console.log(numerosInvertidos); // Imprime el arreglo numeros invertido

// Función para ordenar un arreglo
console.log("Arreglo numeros ordenado:");
function ordenarArreglo(arr) {
    return arr.slice().sort(function(a, b) {
        return a - b; // Ordena el arreglo de menor a mayor
    });
}
// Llamada a la función con el arreglo numeros
let numerosOrdenados = ordenarArreglo(numeros); 
console.log(numerosOrdenados); // Imprime el arreglo numeros ordenado

// y otras funciones más.
console.log("Existen muchas más funciones y métodos para trabajar con arreglos en JavaScript.");
