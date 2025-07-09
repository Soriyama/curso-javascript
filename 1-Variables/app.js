// Ejemplo de variables en JavaScript
// var: se puede redeclarar y es global o local 
// let: no se puede redeclarar y es de bloque
// const: no se puede redeclarar y es de bloque, su valor no puede cambiar
var nombre = "Juan";
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
