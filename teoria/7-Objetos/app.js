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
console.log("Propiedades del objeto");
console.log(datos.nombre); // Soriyama
console.log(datos.edad); // 30
console.log(datos.profesion); // Desarrollador
console.log(datos.lenguajes[0]); // JavaScript
console.log(" ");
// Modificación de propiedades del objeto
console.log("Modificación de propiedades del objeto");
datos.edad = 31;
console.log(datos.edad); // 31

// Agregar una nueva propiedad al objeto
console.log("Agregar una nueva propiedad al objeto");
datos.pais = "España";
console.log(datos.pais); // España
// Eliminar una propiedad del objeto
console.log("Eliminar una propiedad del objeto");
delete datos.profesion;
console.log(datos.profesion); // undefined

// Acceso a un arreglo dentro del objeto
console.log("Acceso a un arreglo dentro del objeto");
console.log(datos.lenguajes.length); // 3
console.log(datos.lenguajes[1]); // React

// Funciones dentro de un objeto

const nick = {
    nombre: "Soriyama",
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}
// Llamada a la función del objeto
console.log("Funciones dentro de un objeto");
nick.saludar(); // Hola, mi nombre es Soriyama

//Uso del método get para acceder a una propiedad
console.log("Uso del método get para acceder a una propiedad");
const nick1 = {
    nombre: "Soriyama",
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(idioma) {
        this.idioma = idioma.toLowerCase();
    },
    get saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}
nick1.saludar; // De esta forma se llama al método get y JS identifica que es una función, por lo que no se usa paréntesis.
console.log("Uso del método set para modificar una propiedad");
console.log(nick1.lang); // ES
nick1.lang = "EN";
console.log(nick1.lang); // EN

//Desestructuración de objetos
console.log("Desestructuración de objetos");
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
console.log("Objeto dentro de un objeto");
console.log(usuario.detalles.edad1); // 30

console.log("Desestructuración de un objeto anidado");
const { nombre1, detalles: { edad1 } } = usuario;
console.log(nombre1); // Soriyama
console.log(edad1); // 30

//Funcion constructora para crear objetos
console.log("Función constructora para crear objetos");
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    };

}
let persona1 = new Persona("Soriyama", 30);
console.log("Instancia persona1");
console.log(persona1.nombre); // Soriyama
console.log(persona1.saludar()); // Hola, mi nombre es Soriyama y tengo 30 años.
console.log(" ");
console.log("Instancia persona2");
let persona2 = new Persona("Grover", 25);
console.log(persona2.nombre); // Grover
console.log(persona2.saludar()); // Hola, mi nombre es Grover y tengo 25 años.

let miObjeto = new Object(); //Forma con constructor de crear un objeto
let miObjeto2 = {}; //Forma literal de crear un objeto

console.log(persona1.apellido);
Persona.prototype.apellido = "Pampo";
console.log("Uso de prototype para agregar una propiedad al constructor Persona");
console.log(persona1.apellido); // Pampo
console.log(persona2.apellido); // Pampo

let perro1 = {
    nombre: "Firulais",
    edad: 5,
    ladrar: function (raza) {
        return `${this.nombre} está ladrando. Raza: ${raza || "desconocida"}`;
    }
}

let perro2 = {
    nombre: "Rex",
    edad: 3,

}

console.log("Uso del método Call para llamar a una función de otro objeto");
console.log(`Perro1 ladrando: ${perro1.ladrar()}`);
console.log(`Perro2 ladrando: ${perro1.ladrar.call(perro2)}`); // Uso de call para llamar al método ladrar de perro1 en el contexto de perro2
console.log("Paso de parámetros con Call");
console.log(`Perro1 ladrando: ${perro1.ladrar("Labrador")}`);
console.log(`Perro2 ladrando: ${perro1.ladrar.call(perro2, "Pastor Alemán")}`); // Paso de parámetro con call

console.log("Uso del método Apply para llamar a una función de otro objeto");
console.log(`Perro1 ladrando: ${perro1.ladrar()}`);
console.log(`Perro2 ladrando: ${perro1.ladrar.apply(perro2)}`); // Uso de apply para llamar al método ladrar de perro1 en el contexto de perro2

console.log("Paso de parámetros con Apply");
console.log(`Perro1 ladrando: ${perro1.ladrar("Bulldog")}`);
console.log(`Perro2 ladrando: ${perro1.ladrar.apply(perro2, ["Beagle"])}`); // Paso de parámetro con apply como un arreglo