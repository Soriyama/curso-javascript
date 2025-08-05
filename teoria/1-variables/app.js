// Ejemplo de variables en JavaScript
// var: se puede redeclarar y es global o local 
// let: no se puede redeclarar y es de bloque
// const: no se puede redeclarar y es de bloque, su valor no puede cambiar
/*var nombre = "Juan";
console.log("Nombre:", nombre);
let edad = 30;
console.log("Edad:", edad);
const ciudad = "Madrid";
console.log("Ciudad:", ciudad);
var nombre = "Pedro"; // redeclaración válida con var
console.log("Nombre:", nombre);
// let edad = 25; // esto causaría un error si se descomenta, ya que let no permite redeclaración
edad = 31; // se puede reasignar el valor de una variable let
console.log("Edad:", edad);
// const ciudad = "Barcelona"; // esto causaría un error si se descomenta, ya que const no permite redeclaración
// ciudad = "Barcelona"; // esto causaría un error, ya que const no permite reasignación

*/
/*************
 * Operadores matemáticos +, -, *, /
 */

 /*var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2)*/

/****
 * Operadores Lógicos, unarios y de asignación
 */
//Lógicos < > <= >= ==
var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
//edadAna++;
console.log(++edadAna);
console.log(edadAna);

//Asignación, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);