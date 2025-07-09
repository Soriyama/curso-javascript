/* 
Funciones predefinidas
Funciones predefinidas: funciones ya definidas en JavaScript
Funciones de cadenas: operaciones con cadenas de texto
Funciones matemáticas: operaciones matemáticas
Funciones de fecha: operaciones con fechas
Funciones de conversión: convertir tipos de datos
*/
// Funciones de cadenas
eval("console.log('Hola desde eval')"); // Evalúa una cadena como código JavaScript
let texto = "Hola, mundo!";
console.log(texto.toUpperCase()); // Convierte a mayúsculas
console.log(texto.toLowerCase()); // Convierte a minúsculas
console.log(texto.length); // Longitud de la cadena
console.log(texto.indexOf("mundo")); // Índice de la subcadena "mundo"
console.log(texto.replace("mundo", "JavaScript")); // Reemplaza "mundo" por "JavaScript"
console.log(texto.split(", ")); // Divide la cadena en un arreglo por la coma y el espacio      

// Funciones matemáticas
console.log(Math.PI); // Valor de PI
console.log(Math.sqrt(16)); // Raíz cuadrada de 16
console.log(Math.pow(2, 3)); // 2 elevado a la 3    
console.log(Math.random()); // Número aleatorio entre 0 y 1
console.log(Math.floor(4.7)); // Redondea hacia abajo
console.log(Math.ceil(4.1)); // Redondea hacia arriba
console.log(Math.round(4.5)); // Redondea al entero más cercano

// Funciones de fecha
let fecha = new Date(); // Fecha y hora actual
console.log(fecha); // Imprime la fecha actual
console.log(fecha.getFullYear()); // Obtiene el año
console.log(fecha.getMonth() + 1); // Obtiene el mes (0-11, por eso se suma 1)
console.log(fecha.getDate()); // Obtiene el día del mes 
console.log(fecha.getHours()); // Obtiene la hora
console.log(fecha.getMinutes()); // Obtiene los minutos
console.log(fecha.getSeconds()); // Obtiene los segundos
console.log(fecha.toISOString()); // Convierte la fecha a formato ISO 8601

// Funciones de conversión
let numero = "123"; // Cadena que representa un número
console.log(Number(numero)); // Convierte a número
console.log(parseInt(numero)); // Convierte a entero
console.log(parseFloat(numero)); // Convierte a número de punto flotante
let booleano = true; // Valor booleano
console.log(String(booleano)); // Convierte a cadena
console.log(Boolean(1)); // Convierte a booleano (1 es true, 0 es false)

// Funciones de tipo de dato
console.log(typeof texto); // Tipo de dato de la variable texto
console.log(typeof numero); // Tipo de dato de la variable numero
console.log(typeof fecha); // Tipo de dato de la variable fecha
console.log(typeof booleano); // Tipo de dato de la variable booleano

