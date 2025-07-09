/*
if-else, switch, for, while, do-while, break, continue
*/
// if-else
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}
// switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}
// for
for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}
// while
let contador = 0;   
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}
// do-while
let contador2 = 0;
do {
    console.log("Contador 2:", contador2);
    contador2++;
}
while (contador2 < 5);
// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, saliendo del bucle");
        break; // sale del bucle cuando i es 5
    }
    console.log("Número:", i);
}
// continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // salta la iteración actual si i es par
    }
    console.log("Número impar:", i);
}   
