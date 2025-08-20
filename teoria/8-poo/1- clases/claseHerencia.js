// Definición de la clase Persona
// Esta clase representa a una persona con nombre y apellido
class Personas {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let personas1 = new Personas('Juan', 'Perez');
console.log(personas1);

let personas2 = new Personas('Carlos', 'Lara');
console.log(personas2);

// Definición de la clase Alumno
// Uso de métodos get y set para acceder y modificar propiedades
class Alumno {
    constructor(nombre, apellido, clase) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._clase = clase;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get clase() {
        return this._clase;
    }
    set clase(clase) {
        this._clase = clase;
    }
}

let alumno1 = new Alumno('Juan', 'Perez', '5ºA');
console.log(`Nombre: ${alumno1.nombre}, Apellido: ${alumno1.apellido}, Clase: ${alumno1.clase}`);

// Definición de la clase Empleado que hereda de Personas
// Uso de super() para llamar al constructor de la clase padre
class Empleado extends Personas {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
}

let personas3 = new Personas('Juan', 'Perez');
console.log(personas1);//get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);