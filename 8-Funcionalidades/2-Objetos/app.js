// Los objetos son una colección de propiedades y funciones.
// Cada propiedad tiene un nombre (clave) y un valor.
// Los objetos pueden contener diferentes tipos de datos, incluyendo otros objetos y funciones.
const datos = {
    nombre: "Soriyama",
    edad: 30,
    profesion: "Desarrollador",
    lenguajes: ["JavaScript", "React", "Java"]
}

// Acceso a las propiedades del objeto
console.log(datos.nombre); // Soriyama
console.log(datos.edad); // 30
console.log(datos.profesion); // Desarrollador
console.log(datos.lenguajes[0]); // JavaScript

// Modificación de propiedades del objeto
datos.edad = 31;
console.log(datos.edad); // 31

// Agregar una nueva propiedad al objeto
datos.pais = "España";
console.log(datos.pais); // España
// Eliminar una propiedad del objeto
delete datos.profesion;
console.log(datos.profesion); // undefined

// Acceso a un arreglo dentro del objeto
console.log(datos.lenguajes.length); // 3
console.log(datos.lenguajes[1]); // React

// Funciones dentro de un objeto
const persona = {
    nombre: "Soriyama",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}
// Llamada a la función del objeto
persona.saludar(); // Hola, mi nombre es Soriyama

//Desestructuración de objetos
const { nombre, edad, lenguajes } = datos;
console.log(nombre); // Soriyama
console.log(edad); // 31
console.log(lenguajes); // ["JavaScript", "React", "Java"]

//Objeto dentro de un objeto
const usuario = {
    nombre1: "Soriyama",
    detalles: {
        edad1: 30,
        profesion: "Desarrollador"
    }
}
console.log(usuario.detalles.edad1); // 30

const { nombre1, detalles: { edad1 } } = usuario;
console.log(nombre1); // Soriyama
console.log(edad1); // 30